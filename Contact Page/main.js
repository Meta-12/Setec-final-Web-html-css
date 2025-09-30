$(document).ready(function () {
  const $flag = $("#flag");

  $flag.on("click", function () {
    let current = $flag.attr("src");

    if (current.includes("english.png")) {
      $flag.attr("src", "../flag/khmer.png");

      $("#all_products").contents().first()[0].textContent = "All Category";
      $("#search").attr("placeholder", "What are you looking for..");

      // Update dropdown items text only
      $(".dropdown ul li:nth-child(1) a").text("Vehicles");
      $(".dropdown ul li:nth-child(2) a").text("Phone & Tablet");
      $(".dropdown ul li:nth-child(3) a").text("Computer & Accessories");
      $(".dropdown ul li:nth-child(4) a").text("Electronics & Appliances");
      $(".dropdown ul li:nth-child(5) a").text("Furniture & Decor");
      $(".dropdown ul li:nth-child(6) a").text("Food");

      // Category card text
      $(".cat_container .card").eq(0).find("p").text("Vehicles");
      $(".cat_container .card").eq(1).find("p").text("Phone & Tablet");
      $(".cat_container .card").eq(2).find("p").text("Computer & Accessories");
      $(".cat_container .card")
        .eq(3)
        .find("p")
        .text("Electronics & Appliances");
      $(".cat_container .card").eq(4).find("p").text("Furniture & Decor");
      $(".cat_container .card").eq(5).find("p").text("Food");

      // login
      $(".login").text("Login");
      $(".register").text("Register");
      $(".sell").html('<i class="fa-brands fa-sellsy"></i> Sell');


      //locat
      $(".top_ads .container .card_container .card .locat").text(
        "8h . Siemreap,Siemreap"
      );
      $(".lasted_ads .container .card_container .card .locat").text(
        "8h . Siemreap,Siemreap"
      );


      // Footer English
      $(".footer-container h3").eq(0).text("Follow Meta-Store");
      $(".footer-container h3").eq(1).text("Customer Service");
      $(".footer-container h3").eq(2).text("Useful Information");

      $(".footer-container ul")
        .eq(0)
        .find("li")
        .eq(0)
        .find("a")
        .text("Contact Us");
      $(".footer-container ul")
        .eq(0)
        .find("li")
        .eq(1)
        .find("a")
        .text("Privacy Policy");
      $(".footer-container ul")
        .eq(0)
        .find("li")
        .eq(2)
        .find("a")
        .text("Account Deletion");

      $(".footer-container ul")
        .eq(1)
        .find("li")
        .eq(0)
        .find("a")
        .text("Safety Tips");
      $(".footer-container ul")
        .eq(1)
        .find("li")
        .eq(1)
        .find("a")
        .text("Product Posting Rules");
      $(".footer-container ul")
        .eq(1)
        .find("li")
        .eq(2)
        .find("a")
        .text("Feedback");

      $(".footer-container .social a").eq(0).contents().last()[0].textContent =
        " Facebook";
      $(".footer-container .social a").eq(1).contents().last()[0].textContent =
        " Youtube";
    } else {
      $flag.attr("src", "../flag/english.png");

      $("#all_products").contents().first()[0].textContent = "ផលិតផលទាំងអស់";
      $("#search").attr("placeholder", "តើអ្នកកំពុងស្វែងរកអ្វី.....");

      // Update dropdown items text only
      $(".dropdown ul li:nth-child(1) a").text("រថយន្ត​​ និង​យាន្ត");
      $(".dropdown ul li:nth-child(2) a").text("ទូរសព្ទ & ថែប្លេក");
      $(".dropdown ul li:nth-child(3) a").text("កុំព្យូទ័រ & គ្រឿងបន្លាស់");
      $(".dropdown ul li:nth-child(4) a").text(
        "អេឡិចត្រូនិក & គ្រឿងប្រើប្រាស់"
      );
      $(".dropdown ul li:nth-child(5) a").text("គ្រឿងសង្ហារឹម & ការតុបតែង");
      $(".dropdown ul li:nth-child(6) a").text("អាហារ");

      // Category card text
      $(".cat_container .card").eq(0).find("p").text("រថយន្ត​​ និង​ ​យានយន្ត");
      $(".cat_container .card").eq(1).find("p").text("ទូរសព្ទ & ថែប្លេក");
      $(".cat_container .card")
        .eq(2)
        .find("p")
        .text("កុំព្យូទ័រ​ & គ្រឿងបន្លាស់");
      $(".cat_container .card")
        .eq(3)
        .find("p")
        .text("អេឡិចត្រូនិក​ & គ្រឿងប្រើប្រាស់");
      $(".cat_container .card")
        .eq(4)
        .find("p")
        .text("គ្រឿងសង្ហារឹម & ការតុបតែង");
      $(".cat_container .card").eq(5).find("p").text("អាហារ & គ្រឿងទេស");

      // login
      $(".login").text("ចូលគណនី");
      $(".register").text("ចុះឈ្មោះ");
      $(".sell").html('<i class="fa-brands fa-sellsy"></i> ដាក់លក់');

      //locat
      $(".top_ads .container .card_container .card .locat").text(
        "8h . សៀមរាប​,សៀមរាប​"
      );
      $(".lasted_ads .container .card_container .card .locat").text(
        "8h . សៀមរាប​,សៀមរាប​"
      );


      // Footer Khmer
      $(".footer-container h3").eq(0).text("តាមដាន Meta-Store");
      $(".footer-container h3").eq(1).text("សេវាកម្មអតិថិជន");
      $(".footer-container h3").eq(2).text("ព័ត៏មានដែលមានប្រយោជន៍");

      $(".footer-container ul")
        .eq(0)
        .find("li")
        .eq(0)
        .find("a")
        .text("ទាក់ទងមកកាន់ពួកយើង");
      $(".footer-container ul")
        .eq(0)
        .find("li")
        .eq(1)
        .find("a")
        .text("គោលការណ៍ឯកជន");
      $(".footer-container ul")
        .eq(0)
        .find("li")
        .eq(2)
        .find("a")
        .text("ការលុបគណនី");

      $(".footer-container ul")
        .eq(1)
        .find("li")
        .eq(0)
        .find("a")
        .text("គន្លឹះសុវត្ថិភាព");
      $(".footer-container ul")
        .eq(1)
        .find("li")
        .eq(1)
        .find("a")
        .text("ច្បាប់នៃការផ្សព្វផ្សាយផលិតផល");
      $(".footer-container ul")
        .eq(1)
        .find("li")
        .eq(2)
        .find("a")
        .text("បញ្ចេញមតិ");

      $(".footer-container .social a").eq(0).contents().last()[0].textContent =
        " Facebook";
      $(".footer-container .social a").eq(1).contents().last()[0].textContent =
        " Youtube";
    }
  });
});
