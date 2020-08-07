var rightWing = false;
var leftWing = false;
var ready = false;

model = {
    rwing:rightWing,
    lwing:leftWing

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
        data.allData.foxnews["view"]="right"
        console.log(data.allData)

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
            if (ready){
                this.rwing=true;
                this.lwing=false;
                console.log('rello')
            }
        },
        lClicked: function() {
            if (ready){
                this.lwing=true;
                this.rwing=false;
                console.log('lello')
            }
        }
    }
})



