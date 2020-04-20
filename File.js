class File {

    constructor(file) {
        
        this.source = file.source || "";    /** */
        this.data   = file.data   || {};    /** */
    }

    load() {

        if(typeof this.data === "string") {

            this.data = JSON.parse(String(this.data));
            //console.log(this.data);
            this.loadAssets(this.data.imageList);
        }
        else {

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = this.ready.bind(xhr, event, this);
            xhr.open("GET", this.source, true);
            xhr.send(); 
        }
    }

    ready(xhr, file, event) {

        if(this.readyState === this.DONE) {

            file.data = JSON.parse(String(this.response)); /** Parse JSON file game data to a JS Object */
            file.loadAssets(file.data.imageList);
        }
    }

    loadAssets(imageList) {

        //var url = window.location.href.replace('/index.html', '') + "/games/images";
        var url = "./games/images/";

        this.loader = new PIXI.Loader();

        this.loader.add('alive.png', url + 'alive.png');
        this.loader.add('arm.png', url + 'arm.png');
        this.loader.add('arm2.png', url + 'arm2.png');
        this.loader.add('back.png', url + 'back.png');
        this.loader.add('backHOVER.png', url + 'backHOVER.png');
        this.loader.add('bigTrail.png', url + 'bigTrail.png');
        this.loader.add('bigTrailWater.png', url + 'bigTrailWater.png');
        this.loader.add('body.png', url + 'body.png');
        this.loader.add('cloud.png', url + 'cloud.png');
        this.loader.add('createdBy.png', url + 'createdBy.png');
        this.loader.add('credits.png', url + 'credits.png');
        this.loader.add('creditsHOVER.png', url + 'creditsHOVER.png');
        this.loader.add('eggBroken.png', url + 'eggBroken.png');
        this.loader.add('eggComplete.png', url + 'eggComplete.png');
        this.loader.add('eggCracked.png', url + 'eggCracked.png');
        this.loader.add('gull.png', url + 'gull.png');
        this.loader.add('gullAnim01.png', url + 'gullAnim01.png');
        this.loader.add('gullAnim03.png', url + 'gullAnim03.png');
        this.loader.add('gullAnim04.png', url + 'gullAnim04.png');
        this.loader.add('gullAnim05.png', url + 'gullAnim05.png');
        this.loader.add('gullAnim06.png', url + 'gullAnim06.png');
        this.loader.add('gullAnim07.png', url + 'gullAnim07.png');
        this.loader.add('gullAnim08.png', url + 'gullAnim08.png');
        this.loader.add('gullAnim09.png', url + 'gullAnim09.png');
        this.loader.add('gullAnim10.png', url + 'gullAnim10.png');
        this.loader.add('gullAnim11.png', url + 'gullAnim11.png');
        this.loader.add('gullAnim12.png', url + 'gullAnim12.png');
        this.loader.add('gullAnim13.png', url + 'gullAnim13.png');
        this.loader.add('gullAnim15.png', url + 'gullAnim15.png');
        this.loader.add('gullBody.png', url + 'gullBody.png');
        this.loader.add('head.png', url + 'head.png');
        this.loader.add('hole1.png', url + 'hole1.png');
        this.loader.add('instructions.png', url + 'instructions.png');
        this.loader.add('instructionsHOVER.png', url + 'instructionsHOVER.png');
        this.loader.add('instructionsPage.png', url + 'instructionsPage.png');
        this.loader.add('keep.png', url + 'keep.png');
        this.loader.add('keyboard.png', url + 'keyboard.png');
        this.loader.add('keyboardHOVER.png', url + 'keyboardHOVER.png');
        this.loader.add('leg.png', url + 'leg.png');
        this.loader.add('leg2.png', url + 'leg2.png');
        this.loader.add('minus50.png', url + 'minus50.png');
        this.loader.add('minus100.png', url + 'minus100.png');
        this.loader.add('mouse.png', url + 'mouse.png');
        this.loader.add('mouseHOVER.png', url + 'mouseHOVER.png');
        this.loader.add('play.png', url + 'play.png');
        this.loader.add('playHOVER.png', url + 'playHOVER.png');
        this.loader.add('plus100.png', url + 'plus100.png');
        this.loader.add('replay.png', url + 'replay.png');
        this.loader.add('saved.png', url + 'saved.png');
        this.loader.add('sea.png', url + 'sea.png');
        this.loader.add('smallTrail.png', url + 'smallTrail.png');
        this.loader.add('them.png', url + 'them.png');
        this.loader.add('turtleAnim01.png', url + 'turtleAnim01.png');
        this.loader.add('turtleAnim02.png', url + 'turtleAnim02.png');
        this.loader.add('turtleAnim03.png', url + 'turtleAnim03.png');
        this.loader.add('turtleAnim04.png', url + 'turtleAnim04.png');
        this.loader.add('turtleAnim05.png', url + 'turtleAnim05.png');
        this.loader.add('turtleAnim06.png', url + 'turtleAnim06.png');
        this.loader.add('turtleAnim07.png', url + 'turtleAnim07.png');
        this.loader.add('turtleAnim08.png', url + 'turtleAnim08.png');
        this.loader.add('turtleAnim09.png', url + 'turtleAnim09.png');
        this.loader.add('turtleAnim10.png', url + 'turtleAnim10.png');
        this.loader.add('turtleAnim11.png', url + 'turtleAnim11.png');
        this.loader.add('turtleAnim12.png', url + 'turtleAnim12.png');
        this.loader.add('turtleAnim13.png', url + 'turtleAnim13.png');
        this.loader.add('turtleAnim14.png', url + 'turtleAnim14.png');
        this.loader.add('turtleBig.png', url + 'turtleBig.png');
        this.loader.add('turtles.png', url + 'turtles.png');
        this.loader.add('turtleSmal.png', url + 'turtleSmal.png');
        

        /*console.log(url, imageList);

        this.loader = new PIXI.Loader(url);
        this.loader.add(imageList);
        this.loader.onLoad.add((loader, resource) => { 
            console.log(resource.name," loaded");
        });*/




        this.loader.load(()=>{
            console.log("Load finished!");
            _player.onFileLoaded();
        });
    }
}