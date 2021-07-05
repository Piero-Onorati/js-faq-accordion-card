document.querySelectorAll('.accordion-question').forEach(item =>{
    item.addEventListener('click', event =>{
        console.log('click');

        if (!item.classList.contains('open')) {
            // add collapsing at accordion answer
            item.nextElementSibling.classList ='.accordion-answer collapsing';
            // after an amount of time, remove collapsing and add opened
            setTimeout(()=>{
                item.nextElementSibling.classList ='.accordion-answer opened';
            },300)
        } 
        else {
            // remove class opened and add collapsing
            item.nextElementSibling.classList ='.accordion-answer collapsing';
            // after an amount of time, remove collapsing and add collapse
            setTimeout(()=>{
                item.nextElementSibling.classList ='accordion-answer collapse';
            },100)
        }

        item.classList.toggle('open');

    });
});


// const app = new Vue(
//     {
//         el: '#app',
//         data : {
//             indexCheck:'',
//             active:false,
//             boldQuestion: 'boldQuestion',   
//             accordions: [
//                 {
//                     question:'How many team members can I invite?',
//                     answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
//                 },

//                 {
//                     question:'What is the maximum file upload size?',
//                     answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
//                 },
    
//                 {
//                     question:'How do I reset my password?',
//                     answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
//                 },
//                 {
//                     question:'Can I cancel my subscription?',
//                     answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
//                 },
//                 {
//                     question:'Do you provide additional support?',
//                     answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
//                 }
//             ]
//         },

//         methods :{
//             openAccordion: function(index){
//                 this.indexCheck = index
//                 this.active = !this.active;
//             }
//         }
//     }
// );


