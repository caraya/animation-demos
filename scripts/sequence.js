/**
 * Created by carlos on 1/17/17.
 */
var ms = Array.prototype.slice.call(document.querySelectorAll('[id^=m]'));
var ts = Array.prototype.slice.call(document.querySelectorAll('[id^=t]'));
var keyframeEffects = [];
var keyframeEffects2 = [];

var effects = {
    scalers: [
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(.5)', offset: .7 },
        { transform: 'scale(1)', offset: 1 }
    ],
    translations: [
        { transform: 'translateY(0)', offset: 0 },
        { transform: 'translateY(.5rem)', offset: .7 },
        { transform: 'translateY(0)', offset: 1 }
    ],
}
var timing = {
    duration: 1000,
    easing: 'ease-in',
    fill: 'both',
    iterations: 1
}

//Create a KeyframeEffect for each element (this will not kick off any animation)
ms.forEach(function(el, i, ra) {
    var effect = new KeyframeEffect(el, effects.scalers, timing);
    keyframeEffects.push(effect);
});
ts.forEach(function(el, i, ra) {
    effect = new KeyframeEffect(el, effects.translations, timing);
    keyframeEffects2.push(effect);
});

//add the six KeyframeEffects to a GroupEffect, and play it on the doucment timeline
var sEffectA = new SequenceEffect(keyframeEffects);
//var anim = document.timeline.play(groupEffectA);

var sEffectB = new SequenceEffect(keyframeEffects2);
//var anim2 = document.timeline.play(groupEffectB);

var gEffectC = new GroupEffect([sEffectA, sEffectB]);
var anim3 = document.timeline.play(gEffectC);


var btn = document.getElementById('player');

btn.addEventListener('click', function(e) {
    if (anim3.playState !== 'running') {
        anim3.play();
    }
});
