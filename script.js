mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

//mobileAndTabletCheck()
const env = "";

const envurl = "images/";
const imageExt = ".png";

//Wordpress environment
// const envurl = "https://www.happytooth.ml/wp-content/uploads/2021/09/";
// const imageExt = ".jpg";

let html;
window.onload = function () {
  html = document.getElementById("full_body").innerHTML;
};
document.getElementById("button_refresh").style.display = "block";

/**********************************************************************************************************************************************************************/
/*Number of options*/
const num_question = 5;

/*Question and answer set*/
const ques_ans_all = [
  {
    question: "After waking up, what should you do to have good teeth ??",
    answer: "brushing",
  },
  {
    question: "Thread used to clean your teeth gaps?",
    answer: "floss",
  },
  {
    question:
      "White drink which you should have in morning, which is good for teeth?",
    answer: "milk",
  },
  {
    question: "You should not have lot of these sweet items ?",
    answer: "candy",
  },
  {
    question: "How many times minimum should you brush your teeth a day ?",
    answer: "two",
  },
];

/*Logic to assing question and ans*/
/*each question div will be assigned name which is same as name of answer image*/
for (let i = 1; i <= num_question; i++) {
  document.getElementById("q" + i).innerHTML = ques_ans_all[i - 1]["question"];
  document
    .getElementById("q" + i)
    .setAttribute("name", ques_ans_all[i - 1]["answer"]);
}

/*********************************************************************************************************************************************************************/

/*To check if all boxes has images*/

const submit = function () {
  for (let i = 1; i <= num_question; i++) {
    const ques = "q" + i;
    const ans = "s" + i;
    if (document.getElementById(ques).getAttribute("name")) {
      jQuery("#" + ans + " img").each(function () {
        let fileNameExt = $(this)
          .attr("src")
          .replace(/^.*[\\\/]/, "");
        let filename = fileNameExt.substring(0, fileNameExt.indexOf("."));
        if (document.getElementById(ques).getAttribute("name") == filename) {
          jQuery(document.getElementById(ans)).append("<r>&#x2713;</r>");
        } else {
          jQuery(document.getElementById(ans)).append("<wr>&#x2717;</wr>");
        }
      });
    }
  }
};

/*Method to get random n objects from an array arr*/
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

/*********************************************************************************************************************************************************************/
// Method called to drop image on box
function allowDrop(event) {
  var t = event.target;
  if (
    !(
      t.classList.contains("in_image") ||
      jQuery("#" + t.id).find("img").length == 1
    )
  ) {
    event.preventDefault();
  } else {
  }
}

//Method called on dragging image
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

//Method called on drop of image
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  //replace $ with jQuery for wordpress
  // checkGrid();
}

function reload() {
  var container = document.getElementById("full_body");
  container.innerHTML = html;
  // loadImages();
}
