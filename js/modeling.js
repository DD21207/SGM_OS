var modeling = new Vue({
	el:'#body_div',
	data:{
		TV:"60%",
		OTV:"32%",
		NonOTV:"5%",
		Magazine:"1%",
		OOH:"2%",
		pn:"",
		Increase:"",
		chartData:[]
	},
	filters:{
		formatNum: function(value) {
	       var num = value*100;
	       return num.toFixed(1)+"%"
	    },
	    formatNum1:function(value){
	    	var value = Math.round(value)
                var num = (value || 0).toString(),
                    result = '';
                while (num.length > 3) {
                    result = ',' + num.slice(-3) + result;
                    num = num.slice(0, num.length - 3);
                }
                if (num) { result = num + result; }
                return result;
	    }
	},
	mounted:function(){
		this.$nextTick(function() {
      		modeling.load();
    	})
	},
	methods:{
		load:function(){
		      this.$http.post('onLoadChart.do',{
		      	"TVPercent":this.toPoint(this.TV),
		      	"OTVPercent":this.toPoint(this.OTV),
		      	"Non_OTVPercent":this.toPoint(this.NonOTV),
		      	"MagazinePercent":this.toPoint(this.Magazine),
		      	"OOHPercent":this.toPoint(this.OOH)
		      }).then(function(data) {
		      	this.pn = data.body.pn;
		      	this.Increase = data.body.Increase;
		      	this.chartData.push(data.body.Optimized,data.body.Original);
		      	
		      	bar('bar1','Baidu Index Contributed by Media Only',['Optimized', 'Original'],this.chartData)
		      });
		},
		toPoint:function (percent){
		    var str=percent.replace("%","");
		    str= str/100;
		    return str;
		},
		confirm:function(){
			this.chartData =[];
		      	

			this.$http.post('onLoadChart.do',{
		      	"TVPercent":this.toPoint(this.TV),
		      	"OTVPercent":this.toPoint(this.OTV),
		      	"Non_OTVPercent":this.toPoint(this.NonOTV),
		      	"MagazinePercent":this.toPoint(this.Magazine),
		      	"OOHPercent":this.toPoint(this.OOH)
		      }).then(function(data) {
		      	this.TV = this.zero(data.body.TVPercent);
		      	this.OTV = this.zero(data.body.OTVPercent);
		      	this.NonOTV = this.zero(data.body['Non_OTVPercent']);
		      	this.Magazine = this.zero(data.body.MagazinePercent);
		      	this.OOH = this.zero(data.body.OOHPercent);
		      	this.pn = data.body.pn;
		      	this.Increase = data.body.Increase;
		      	this.chartData.push(data.body.Optimized,data.body.Original);
		      	console.log(this.chartData);
		      	bar('bar1','Baidu Index Contributed by Media Only',['Optimized', 'Original'],this.chartData)
		      });
		},
		zero:function(data){
			if(data.indexOf('.0') != -1){
				return data.replace('.0%','%');
			}
		}
	}
})