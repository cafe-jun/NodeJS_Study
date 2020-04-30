const sayNode = function (message) {
    if(message === 'old'){
        console.log('old Node');
    }else if(message === 'new'){
        console.log('new Node');
    }else { 
        console.log('not old new Object')
    }    
};
const es= 'ES';
const oldObject = {
    sayJS: function(){
        console.log('old JS');
    },
    sayNode : sayNode,
};
oldObject[es+6] = 'old Fantastic';

const newObject = {
    sayJS() {
        console.log('new JS');
    },
    sayNode,
    [es+6]: 'new Fantastic',
};

function init() {
    oldObject.sayNode('old');
    oldObject.sayJS();
    console.log(oldObject.ES6)
    newObject.sayNode('new');
    newObject.sayJS();
    console.log(newObject.ES6);
    newObject.sayNode('test')
}



init();

