function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/br4zfMPFE/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}

   
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        img=document.getElementById('alien1');
        
        if(results[0].label=="barking"){
            img.src='https://www.vhv.rs/dpng/d/428-4283887_clip-art-cats-and-dogs-animated-cat-and.png';
            
        }
        else if(results[0].label=="meow"){
            img.src='https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/95/b0/5a/95b05a3d-d2c9-5484-4b98-5eaa8197ab11/source/512x512bb.jpg';
            
        }
        else if(results[0].label=="roar"){
            img.src='https://cdn.dribbble.com/users/2866615/screenshots/6932077/lion-2.gif';
           
        }
        else{
            img.src='https://image.shutterstock.com/image-vector/human-ear-vector-illustration-260nw-124402309.jpg';
           
        }
    }
    }