const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const toggle = document.getElementById('checkBox');
const label = document.getElementById('checkLabel')

label.addEventListener('click', () => {console.log(toggle.checked)});

function monthly() {
    let firstCard = '';
    firstCard += '<p>Basic</p>'
    firstCard += '<h1>$19.99</h1>';
    firstCard += '<hr />';
    firstCard += '<p>500 GB Storage</p>';
    firstCard += '<hr />';
    firstCard += '<p>2 Users Allowed</p>';
    firstCard += '<hr />';
    firstCard += '<p>Send up to 3 GB</p>';
    firstCard += '<hr />';
    firstCard += '<button>LEARN MORE</button>';
    cardOne.innerHTML = firstCard;

    let secondCard = '';
    secondCard += '<p>Professional</p>'
    secondCard += '<h1>$24.99</h1>';
    secondCard += '<hr />';
    secondCard += '<p>1 TB Storage</p>';
    secondCard += '<hr />';
    secondCard += '<p>5 Users Allowed</p>';
    secondCard += '<hr />';
    secondCard += '<p>Send up to 10 GB</p>';
    secondCard += '<hr />';
    secondCard += '<button>LEARN MORE</button>';
    cardTwo.innerHTML = secondCard;

    let thirdCard = '';
    thirdCard += '<p>Master</p>'
    thirdCard += '<h1>$39.99</h1>';
    thirdCard += '<hr />';
    thirdCard += '<p>2 TB Storage</p>';
    thirdCard += '<hr />';
    thirdCard += '<p>10 Users Allowed</p>';
    thirdCard += '<hr />';
    thirdCard += '<p>Send up to 20 GB</p>';
    thirdCard += '<hr />';
    thirdCard += '<button>LEARN MORE</button>';
    cardThree.innerHTML = thirdCard;
}

function annually() {
    let firstCard = '';
    firstCard += '<p>Basic</p>'
    firstCard += '<h1>$219.99</h1>';
    firstCard += '<hr />';
    firstCard += '<p>500 GB Storage</p>';
    firstCard += '<hr />';
    firstCard += '<p>2 Users Allowed</p>';
    firstCard += '<hr />';
    firstCard += '<p>Send up to 3 GB</p>';
    firstCard += '<hr />';
    firstCard += '<button>LEARN MORE</button>';
    cardOne.innerHTML = firstCard;

    let secondCard = '';
    secondCard += '<p>Professional</p>'
    secondCard += '<h1>$269.99</h1>';
    secondCard += '<hr />';
    secondCard += '<p>1 TB Storage</p>';
    secondCard += '<hr />';
    secondCard += '<p>5 Users Allowed</p>';
    secondCard += '<hr />';
    secondCard += '<p>Send up to 10 GB</p>';
    secondCard += '<hr />';
    secondCard += '<button>LEARN MORE</button>';
    cardTwo.innerHTML = secondCard;

    let thirdCard = '';
    thirdCard += '<p>Master</p>'
    thirdCard += '<h1>$439.99</h1>';
    thirdCard += '<hr />';
    thirdCard += '<p>2 TB Storage</p>';
    thirdCard += '<hr />';
    thirdCard += '<p>10 Users Allowed</p>';
    thirdCard += '<hr />';
    thirdCard += '<p>Send up to 20 GB</p>';
    thirdCard += '<hr />';
    thirdCard += '<button>LEARN MORE</button>';
    cardThree.innerHTML = thirdCard;

}
annually();

function togglePrice() {
    toggle.checked ? monthly() : annually();
};

toggle.addEventListener('change', togglePrice);