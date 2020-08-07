var rightWing = false;
var leftWing = false;
var ready = false;






model = {
    rwing:rightWing,
    lwing:leftWing,
    foxNewsData:{},
    theWallStreetJournalData:{},
    breitbartNewsData:{},
    theWashingtonPostData:{},
    independentData:{},
    cnnData:{},
    theHuffingtonPostData:{},
    viceNewsData:{}
}

const app = new Vue({
    el: '#app',
    data: model,
    mounted: async function () { 
        ready = false;
        const response = await fetch('/api/rNews')
        const data = await response.json()
        ready = true;

//RWING

        //FoxNews
        this.foxNewsData = await data.allData.foxnews


        //WallStreet
        this.theWallStreetJournalData = await data.allData.thewallstreetjournal

        //Breitbart
        this.breitbartNewsData = await data.allData.breitbartnews
        
        //The Washington Post
        this.theWashingtonPostData = await data.allData.thewashingtonpost

//LWING
        //independent
        this.independentData = await data.allData.independent

        //cnn
        this.cnnData = await data.allData.cnn
        
        //HuffPo
        this.theHuffingtonPostData = await data.allData.thehuffingtonpost;

        //Vice
        this.viceNewsData = await data.allData.vicenews
    },
    methods:{
        rClicked: function() {
                this.rwing=true;
                this.lwing=false;
                $('button').each(function(i, obj) {
                    console.log(obj)
                });
            
        },
        lClicked: function() {
                this.lwing=true;
                this.rwing=false;
            
        }
    }
})



