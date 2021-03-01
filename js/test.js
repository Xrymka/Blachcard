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


/* Tab-content */

let ages = [
  {
    'year': [{
      'name': 'Бенедетто ди Биндо',
      'years': 'ок. 1380—85 - 19 сентября 1417',
      'image': 'image/catalog/authors/girlandaio.jpg'
    },
    {
      'name': 'Бергоньоне, Амброджо',
      'years': '1453 - 1523',
      'image': 'image/catalog/authors/ambrodgo.jpg'
    }]
  }
  // {
  //   'year': ['Artist 1 1500-1600', 'Artist 2 1500-1600', 'Artist 3 1500-1600']
  // }
]


window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery__content-list-item-text').forEach(function(tabsBtn, i) {

    console.log(i);

    //

    var j = 0;
    for (j = 0; j < ages.length; j++) {

      if (i == j) {
        for (k = 0; k < ages[j].year.length; k++) {
          let p = document.createElement('p');
          p.innerHTML = ages[j].year[k].name;
          tabsBtn.append(p);

          let nameOfArtist = ages[j].year[k].name;
          let imgOfArtist = ages[j].year[k].image;

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
