/* Accordion */
$(function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    // icons: { "header": "plus", "activeHeader": "minus" }
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery__content-list-item-btn').forEach(function(item) {
    item.addEventListener('click', function() {
      // $this.querySelector('.questions__list-item-btn').classList.toggle('actives')
      if (item.classList.contains('actives')) {
        item.classList.remove('actives')
      }
      else  {
        document.querySelectorAll('.gallery__content-list-item-btn').forEach(function(item) {
          item.classList.remove('actives')
        })
        item.classList.add('actives')
      }
    })
  })
})


let countries = [
  {
    'year': [{
      'name': 'Бенедетто ди Биндо',
      'years': 'ок. 1380—85 - 19 сентября 1417',
      'image': 'image/catalog/authors/italian/1400/girlandaio.jpg'
    },
    {
      'name': 'Бергоньоне, Амброджо',
      'years': '1453 - 1523',
      'image': 'image/catalog/authors/italian/1400/ambrodgo.jpg'
    }],
    'year': [{
      'name': 'Бен',
      'years': 'ок. 1380—85 - 19 сентября 1417',
      'image': 'image/catalog/authors/italian/1400/girlandaio.jpg'
    },
    {
      'name': 'Амброджо',
      'years': '1453 - 1523',
      'image': 'image/catalog/authors/italian/1400/ambrodgo.jpg'
    }]
  },

  {
    'year': [{
      'name': '111Бенедетто ди Биндо',
      'years': 'ок. 1380—85 - 19 сентября 1417',
      'image': 'image/catalog/authors/italian/1400/girlandaio.jpg'
    }],
    'year': [{
      'name': '222Бенедетто ди Биндо',
      'years': 'ок. 1380—85 - 19 сентября 1417',
      'image': 'image/catalog/authors/italian/1400/girlandaio.jpg'
    }]
  }
]


let countries2 = {
  // france
  'france' : [[{
      'name' : "123213"
    },{
      'name' : "555555"
    }],[{
      'name' : "po'jo;jklj"
    }]],

    'german' : [[{
      'name' : "123213"
    },{
      'name' : "555555"
    }],[{
      'name' : "po'jo;jklj"
    }]]
  }







let choosenCountry = 0;

window.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.catalog__btn').forEach(function(CountryBtn, m) {

    //console.log(m);
    let ind = m;

    CountryBtn.addEventListener('click', function() {
      document.querySelectorAll('.gallery__content-list-item-text').forEach(function(tabsBtn, i) {

        console.log(ind + " 2323 232 ")
        let country = Object.keys(countries2)[ind];
        // let country = CountryBtn.id;
        console.log(country);
        //console.log(countries2[country][0][0].name);

        for (var j = 0; j < countries[choosenCountry].year.length; j++) {

          //console.log(countries[choosenCountry].year.length)

          if (i == j) {
            for (var k = 0; k < countries[choosenCountry].year.length; k++) {
              let p = document.createElement('p');
              p.innerHTML = countries[choosenCountry].year[k].name;
              tabsBtn.append(p);

              let nameOfArtist = countries[choosenCountry].year[k].name;
              let imgOfArtist = countries[choosenCountry].year[k].image;

              p.addEventListener('click', function() {
                document.querySelector('.gallery__content-name').innerHTML = nameOfArtist;
                document.querySelector('.gallery__content-img').src = imgOfArtist;
              })
            }
          }
        }

        /*tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.work__left').forEach(function(tabContent) {
            tabContent.classList.remove('work__left-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('work__left-active')
        })*/
      })
    })
    })
    })








// var j = 0;
//       for (j = 0; j < countries[c].ages.length; j++) {

//         if (i == j) {
//           for (k = 0; k < countries[c].ages[j].year.length; k++) {
//             let p = document.createElement('p');
//             p.innerHTML = countries[c].ages[j].year[k].name;
//             tabsBtn.append(p);

//             let nameOfArtist = countries[c].ages[j].year[k].name;
//             let imgOfArtist = countries[c].ages[j].year[k].image;

//             p.addEventListener('click', function() {
//               document.querySelector('.gallery__content-name').innerHTML = nameOfArtist;
//               document.querySelector('.gallery__content-img').src = imgOfArtist;
//             })
//           }

//         }
//       }
