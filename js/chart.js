function bar(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
        title: {
            text: title,
            x: 'center',
        },
        color:['#31859C'],
        xAxis: [{
            type: 'category',
            data: x_data
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'Contributed',
            type: 'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    distance: 5,
                    fontSize:16,
                    formatter: function(data) {
                        var value = Math.round(data.value)
                        var num = (value || 0).toString(),
                            result = '';
                        while (num.length > 3) {
                            result = ',' + num.slice(-3) + result;
                            num = num.slice(0, num.length - 3);
                        }
                        if (num) { result = num + result; }
                        return result;
                    },

                }
            },
            data: data,
        }]
    };

    myChart.setOption(option);

    window.onload = res();

    function res() {
        myChart.resize();

        // myChartF.resize();
    }

    window.onresize = function() {
        myChart.resize();

    }
}