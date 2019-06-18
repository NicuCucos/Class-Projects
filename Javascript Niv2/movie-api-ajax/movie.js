const KEY_V3 = '4a056117f966da45fd01b2ca5d1c85a5';
const KEY_V4 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTA1NjExN2Y5NjZkYTQ1ZmQwMWIyY2E1ZDFjODVhNSIsInN1YiI6IjVjZmZjNzNiMGUwYTI2NzFjN2NkNmNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6OoQdbYWnDMxQQpltsK5YZEe2ViaWgbgamMB8TJQGZ0';
const URl_V3 = 'https://api.themoviedb.org/3/';
const URl_V4 = 'https://api.themoviedb.org/4/';


//JSon. parse( din "string")  ---> structured data;
//JSON.stringify (structured data) ---> string


//pornim carouselul - filme populare

// $(document).ready(function(){
//     $('.popular-movies').slick({
//      dots:true
//     });
//   });

  function get_popular_movies(){
      var xhr = new XMLHttpRequest();

      xhr.open("GET" ,URl_V3 + 'movie/popular?api_key='+ KEY_V3 );
      xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        console.log( data.results );
        for (var i =0; i<5; i++){
            console.log(data.results[i].title);
            
            let div = document.createElement('div');
            div.className = "card";
            let img = document.createElement('img');
            img.className = "card-img-top";
            img.src = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;

            ;
            div.appendChild(img);
            let div2 =document.createElement ('div');
            div2.className = "card-body";
            div.appendChild(div2);
            let h5 = document.createElement ('h5');
            h5.className = "card-title";
            h5.innerHTML = data.results[i].title;
            div2.appendChild(h5);
            let p = document.createElement ('p');
            p.className = "card-text";
            div2.appendChild(p);
            let a = document.createElement('a');
            a.href = "#";
            a.className = "btn btn-primary";
            a.innerHTML = "Download";
            div2.appendChild(a);

            var  div3 = document.querySelector('.popular-movies');

            div3.appendChild(div);

            
            




           
           
            // <div class="card" style="width: 18rem;">
            // <img src="..." class="card-img-top" alt="...">
            // <div class="card-body">
            //   <h5 class="card-title">Card title</h5>
            //   <p class="card-text"></p>
            //   <a href="#" class="btn btn-primary">Download</a>
            // </div>
        }
                   $('.popular-movies').slick({
             dots:true
            });
       
      }
      xhr.send();
  }

  get_popular_movies();