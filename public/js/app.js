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
        console.log(data.allData.foxnews)
        this.foxNewsData = await data.allData.foxnews
        /*this.foxNewsTitle = await data.allData.foxnews.title
        this.foxNewsDetails = await data.allData.foxnews.content
        this.foxNewsImg = await data.allData.foxnews.urlToImage
        this.foxNewsLink = await data.allData.foxnews.url*/

        //WallStreet
        this.theWallStreetJournalData = await data.allData.thewallstreetjournal
        /*
        this.theWallStreetJournalTitle = await data.allData.thewallstreetjournal.title
        this.theWallStreetJournalDetails = await data.allData.thewallstreetjournal.content
        this.theWallStreetJournalImg = await data.allData.thewallstreetjournal.urlToImage
        this.theWallStreetJournalLink = await data.allData.thewallstreetjournal.url
        */
        //Breitbart
        this.breitbartNewsData = await data.allData.breitbartnews
        /*
        this.breitbartNewsTitle = await data.allData.breitbartnews.title
        this.breitbartNewsDetails = await data.allData.breitbartnews.content
        this.breitbartNewsImg = await data.allData.breitbartnews.urlToImage
        this.breitbartNewsLink = await data.allData.breitbartnews.url
        */
        //The American Con
        this.theWashingtonPostData = await data.allData.thewashingtonpost
        /*
        this.theWashingtonPostTitle = await data.allData.theWashingtonPost.title
        this.theWashingtonPostDetails = await data.allData.breitbartnews.content
        this.theWashingtonPostImg = await data.allData.breitbartnews.urlToImage
        this.theWashingtonPostLink = await data.allData.breitbartnews.url
*/
//LWING
        //independent
        this.independentTitle = await data.allData.independent.title
        this.independentDetails = await data.allData.independent.content
        this.independentImg = await data.allData.independent.urlToImage
        this.independentLink = await data.allData.independent.url

        //cnn
        this.cnnTitle = await data.allData.cnn.title
        this.cnnDetails = await data.allData.cnn.content
        this.cnnImg = await data.allData.cnn.urlToImage
        this.cnnLink = await data.allData.cnn.url

        //HuffPo
        this.theHuffingtonPostTitle = await data.allData.thehuffingtonpost.title
        this.theHuffingtonPostDetails = await data.allData.thehuffingtonpost.content
        this.theHuffingtonPostImg = await data.allData.thehuffingtonpost.urlToImage
        this.theHuffingtonPostLink = await data.allData.thehuffingtonpost.url

        //Vice
        this.viceNewsTitle = await data.allData.vicenews.title
        this.viceNewsDetails = await data.allData.vicenews.content
        this.viceNewsImg = await data.allData.vicenews.urlToImage
        this.viceNewsLink = await data.allData.vicenews.url

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



