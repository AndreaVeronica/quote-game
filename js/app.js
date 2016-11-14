(function(){
 var app = angular.module('quoteGame', [ ]);
  app.controller('GameController', function(){
    this.answers = quotes;
  });

     var quotes = [
     {   text: 'The flower that blooms in adversity is the most rare and beautiful of them all.',
         number: 1,
         speaker: 'The Emporor',
         movie: 'Mulan',
         pic: 'http://images6.fanpop.com/image/polls/1202000/1202219_1365371420033_full.jpg',
     },
     {   text: 'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
         number: 2,
         speaker: 'Rafiki',
         movie: 'The Lion King',
         pic: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2015/01/Rafiki-The-Lion-King-3.jpeg',
     },
     {   text: 'If you walk the footsteps of a stranger, you\'ll learn things you never knew you never knew.',
         number: 3,
         speaker: 'Pocahontas',
         movie: 'Pocahontas',
         pic: 'http://vignette1.wikia.nocookie.net/characters/images/3/32/Pocahontas1.jpg/revision/latest?cb=20150601000252',
     },
     {   text: 'A true hero isn\'t measured by the size of his strength, but by the strength of his heart.',
         number: 4,
         speaker: 'Zeus',
         movie: 'Herculus',
         pic: 'http://66.media.tumblr.com/tumblr_l6cph3rEMG1qd0axho1_1280.jpg',
     },
     {   text: 'I\'m only brave when I have to be. Being brave doesn\'t mean you go looking for trouble.',
         number: 5,
         speaker: 'Mufasa',
         movie: 'The Lion King',
         pic: 'http://vignette1.wikia.nocookie.net/tlk-characters/images/1/17/Mufasa_TLK1Presentati.jpg/revision/latest?cb=20140801170201',
     } ,
     {   text: 'Sometimes the right path is not the easiest one.',
         number: 6,
         speaker: 'Grandmother Willow',
         movie: 'Pocahontas',
         pic: 'http://images6.fanpop.com/image/photos/36400000/Walt-Disney-Characters-image-walt-disney-characters-36400800-5760-3240.jpg',
     }



    ];

})();
