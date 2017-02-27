+ function($) {
    "use strict";
    var format = function(data) {
        var result = [];
        for(var i=0;i<data.length;i++) {
            var d = data[i];
            if(d.name === "请选择") continue;
            result.push(d.name);
        }
        if(result.length) return result;
        return [""];
    };

    var getHours = function(data) {
        if(!data.hours) return [""];
        var result = [];
        var str = data.hours + "|" + data.gfbgdj + "|" + data.gjbtdj + "|" + data.rmfddj + "|" + data.shejbt + "|" + data.shejbtnx + "|" + data.shijbt + "|" + data.shijbtnx; 
        result.push(str);
        return result;
    };
    var sub = function(data) {
        if(!data.sub) return [""];
        return format(data.sub);
    };

    var getCities = function(d) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === d) return sub(raw[i]);
        }
        return [""];
    };

    var getDistricts = function(p, c) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === p) {
                for(var j=0;j< raw[i].sub.length;j++) {
                    if(raw[i].sub[j].name === c) {
                        return sub(raw[i].sub[j]);
                    }
                }
            }
        }
        return [""];
    };
    var getDistrictHours= function(p, c, d) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === p) {
                for(var j=0;j< raw[i].sub.length;j++) {
                    if(raw[i].sub[j].name === c) {
                    	for(var k=0;k< raw[i].sub[j].sub.length;k++) {
                            if(raw[i].sub[j].sub[k].name === d) {
                            	var result = [];
                            	var data = raw[i].sub[j].sub[k];
                            	var str = data.hours + "|" + data.gfbgdj + "|" + data.gjbtdj + "|" + data.rmfddj + "|" + data.shejbt + "|" + data.shejbtnx + "|" + data.shijbt + "|" + data.shijbtnx;
                                result.push(str);
                                return result;
                            }
                        }
                    }
                }
            }
        }
        return [""];
    };
    var raw="";
    $.ajaxSettings.async = false; 
    $.getJSON("loadCities", function(data){
    	raw = data;
    });
    var provinces = raw.map(function(d) {
        return d.name;
    });
    var initCities = sub(raw[0]);
    var initDistricts = sub(raw[0].sub[0]);
    var initHours = getHours(raw[0].sub[0].sub[0]);
    
    var currentProvince = provinces[0];
    var currentCity = initCities[0];
    var currentDistrict = initDistricts[0];

    var t;
    var defaults = {

        cssClass: "city-picker",
        rotateEffect: false,  //为了性能

        onChange: function (picker, values, displayValues) {

            var newProvince = picker.cols[0].value;
            var newCity;
            var newDistrict;
            if(newProvince !== currentProvince) {
                // 如果Province变化，节流以提高reRender性能
                clearTimeout(t);
                t = setTimeout(function(){
                    var newCities = getCities(newProvince);
                    newCity = newCities[0];
                    var newDistricts = getDistricts(newProvince, newCity);
                    newDistrict = newDistricts[0];
                    var newDistrictHour = getDistrictHours(newProvince, newCity, newDistrict);
                    picker.cols[1].replaceValues(newCities);
                    picker.cols[2].replaceValues(newDistricts);
                    picker.cols[3].replaceValues(newDistrictHour);
                    currentProvince = newProvince;
                    currentCity = newCity;
                    currentDistrict = newDistrict;
                    picker.updateValue();
                }, 200);
                return;
            }
            newCity = picker.cols[1].value;
            if(newCity !== currentCity) {
            	 clearTimeout(t);
                 t = setTimeout(function(){
                	 var newDistricts = getDistricts(newProvince, newCity);
                     newDistrict = newDistricts[0];
                     var newDistrictHour = getDistrictHours(newProvince, newCity, newDistrict);
                     picker.cols[2].replaceValues(newDistricts);
                     picker.cols[3].replaceValues(newDistrictHour);
	                 currentCity = newCity;
	                 currentDistrict = newDistrict;
	                 picker.updateValue();
                 }, 200);
            } 
            newDistrict = picker.cols[2].value;
            if(newDistrict !== currentDistrict) {
            	clearTimeout(t);
                t = setTimeout(function(){
	                picker.cols[3].replaceValues(getDistrictHours(newProvince, newCity, newDistrict));
	                currentDistrict = newDistrict;
	                picker.updateValue();
                }, 200);
            } 
        },

        cols: [
        {
            textAlign: 'center',
            values: provinces,
            cssClass: "col-province"
        },
        {
            textAlign: 'center',
            values: initCities,
            cssClass: "col-city"
        },
        {
            textAlign: 'center',
            values: initDistricts,
            cssClass: "col-district"
        },
        {
            textAlign: 'center',
            values: initHours,
            cssClass: "col-info"
        }
        ]
    };

    $.fn.cityPicker = function(params) {
        return this.each(function() {
            if(!this) return;
            var p = $.extend(defaults, params);
            //计算value
            if (p.value) {
                $(this).val(p.value.join(' '));
            } else {
                var val = $(this).val();
                val && (p.value = val.split(' '));
            }

            if (p.value) {
                //p.value = val.split(" ");
                if(p.value[0]) {
                    currentProvince = p.value[0];
                    p.cols[1].values = getCities(p.value[0]);
                }
                if(p.value[1]) {
                    currentCity = p.value[1];
                    p.cols[2].values = getDistricts(p.value[0], p.value[1]);
                } else {
                    p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
                }
                !p.value[2] && (p.value[2] = '');
                currentDistrict = p.value[2];
            }
            $(this).picker(p);
        });
    };

}(Zepto);