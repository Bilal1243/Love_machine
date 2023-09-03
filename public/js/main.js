(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var lname = $('.validate-input input[name="name"]');

  $(".validate-form").on("submit", function () {
    var check = true;

    if ($(name).val().trim() == "") {
      showValidate(name);
      check = false;
    }
    if ($(lname).val().trim() == "") {
      showValidate(name);
      check = false;
    }

    return check;
  });

  $(".validate-form .input1").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);

document
  .getElementById("loveForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      lname: formData.get("lname"),
    };
    try {
      const response = await fetch(
        "/loveYou/greatLove/enjoyYourLove/Have-A-Great-life",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      if (data.status === true) {
        Swal.fire({
          title: "Sweet!",
          text:
            userData.name +
            ", you love " +
            userData.lname +
            "  " +
            data.percentage +
            "%",
          imageUrl:
            "https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
        }).then(() => [(location.href = "/")]);
      } else if (data.novalue === true) {
        Swal.fire({
          title: "oops!",
          text:
            userData.name +
            ", you love " +
            userData.lname +
            "  " +
            data.percentage +
            "%",
          imageUrl:
            "https://www.animatedimages.org/data/media/503/animated-broken-heart-image-0019.gif",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
        }).then(() => [(location.href = "/")]);
      } else {
        Toastify({
          text: "enter names",
          duration: 1000,
          newWindow: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        setTimeout(() => {
          location.href = "/";
        }, 1000);
      }
    } catch (error) {
      alert(error.message);
    }
  });
