$(document).ready(function () {



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


  //Email validation
  $("#liveToastBtn").click(function () {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = $("#email").val();
    var txt = $("#textarea").val();

    if (mail.match(validRegex) && txt != "") {

      //alert(mail);

      const toastTrigger = document.getElementById('liveToastBtn')
      const toastLiveExample = document.getElementById('liveToast')
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show()

      setTimeout(function () {

        $("#email").val("");
        $("#textarea").val("");
      }, 2000);


    }

    if (!mail.match(validRegex)) {
      $("#email-id").removeClass("d-none")
      setTimeout(function () {
        $("#email-id").addClass("d-none");

      }, 3000);

    }

    if (txt === "") {
      $("#query-text").removeClass("d-none")
      setTimeout(function () {

        $("#query-text").addClass("d-none")
      }, 3000);
    }




  });

  // //popover
  // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


  // $("#sub1").click(function () {
  //   window.alert("Hello world");
  // });

  document.getElementById("sub1")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var electricityBill = $("#electric-bill").val();
      var vehicleMileage = $("#vehicle-milage").val();
      var gasBill = $("#gas-bill").val();
      var oilBill = $("#oil-bill").val();
      var flight = $("#flight").val();
      var flights = $("#flights").val();

      var rp = $("#rp").val();
      var rm = $("#electric-bill").val();
      //window.alert(rp);

      var eb=electricityBill * 105;
      var vm=vehicleMileage * 0.79
      var gb= gasBill * 105;
      var ob=oilBill * 113;
      var fl= flight * 1100;
      var fls=flights * 4400;
      var rrp=rp * 184;
      var rrm= rm * 166;

      var totalEmissions = eb+vm+gb+ob+fl+fls+rrp+rrm;

      //window.alert(totalEmissions);

      $("#result1").html("Total Emission : " + totalEmissions);


      //Pie Chart

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Consumption', 'Units'],
          ['Electricity', eb],
          ['Vehicle', vm],
          ['Gas', gb],
          ['Oil', ob],
          ['Flights', rrp+rrm]
        ]);

        var options = {
          legend:'none',
          pieHole: 0.4,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }

    });


  // //chat bot
  // document.getElementById("chatbot-button").addEventListener("click", function () {
  //   var chatbotFrame = document.getElementById("chatbot-frame");
  //   chatbotFrame.src = "https://www.chatbase.co/chatbot-iframe/WDRjVbBKrI_i1JP9LrAWq";
  //   chatbotFrame.style.display = "block";
  // });


  // LIKNKS -> Issues




  // if (totalEmissions <= 6000) {
  //   $("#result1").val("Very Low carbon footprint");
  // } else if (totalEmissions <= 15999) {
  //   $("#result1").val("Low carbon footprint");
  // }  else if (totalEmissions <= 22000) {
  //   $("#result1").val("Moderate carbon footprint");
  // }
  // else {
  //   $("#result1").val("High carbon footprint");
  // }








});






/*

if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }




    //$("#tt").

$("#nav").mouseenter(function(){
        $("#tt").addClass("text-success");
    });
    $("#nav").mouseleave(function(){
        $("#tt").removeClass("text-success");
    });


    function validateForm() {
  const emailInput = document.querySelector('#email');
  const textareaInput = document.querySelector('#textarea');
  const validationAlert = document.querySelector('#validation-alert');

  // Validate email address.
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(emailInput.value)) {
    // Show an error message to the user.
    emailInput.classList.add('is-invalid');
    validationAlert.classList.remove('d-none');
    validationAlert.textContent = 'Please enter a valid email address.';
    return false;
  }

  // Validate textarea.
  if (textareaInput.value === '') {
    // Show an error message to the user.
    textareaInput.classList.add('is-invalid');
    validationAlert.classList.remove('d-none');
    validationAlert.textContent = 'Please fill in the textarea.';
    return false;
  }

  // All fields are valid.
  return true;
}

*/
