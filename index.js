const navbar = document.querySelector('#nav');
navbar.innerHTML = `<div class="navTop">
            <div class="navItem">
                <a href="http://127.0.0.1:5501/index.html"><img src="./img/sneakers.png" alt=""></a>
            </div>
            <div class="navItem">
                <div class="search">
                    <input type="text" placeholder="Search..." class="searchInput">
                    <img src="./img/search.png" width="20" height="20" alt="" class="searchIcon">
                </div>
            </div>
            <div class="navItem">
                <span class="limitedOffer">Limited Offer!</span>
            </div>
        </div>
        <div class="navBottom">
            <h3 class="menuItem">AIR FORCE</h3>
            <h3 class="menuItem">JORDAN</h3>
            <h3 class="menuItem">BLAZER</h3>
            <h3 class="menuItem">CRATER</h3>
            <h3 class="menuItem">HIPPIE</h3>
        </div>`

const slider = document.querySelector('.slider');
slider.innerHTML = `<div class="sliderWrapper">
            <div class="sliderItem">
                <img src="./img/air.png" alt="" class="sliderImg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">AIR FORCE</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$119</h2>
                <a href="#product">
                    <button class="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="./img/jordan.png" alt="" class="sliderImg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">AIR JORDAN</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$149</h2>
                <a href="#product">
                    <button class="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="./img/blazer.png" alt="" class="sliderImg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">BLAZER</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$109</h2>
                <a href="#product">
                    <button class="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="./img/crater.png" alt="" class="sliderImg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">CRATER</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$129</h2>
                <a href="#product">
                    <button class="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div class="sliderItem">
                <img src="./img/hippie.png" alt="" class="sliderImg">
                <div class="sliderBg"></div>
                <h1 class="sliderTitle">HIPPIE</br> NEW</br> SEASON</h1>
                <h2 class="sliderPrice">$99</h2>
                <a href="#product">
                    <button class="buyButton">BUY NOW!</button>
                </a>
            </div>
        </div>`

const features = document.querySelector('.features');
features.innerHTML = `<div class="feature">
            <img src="./img/shipping.png" alt="" class="featureIcon">
            <span class="featureTitle">FREE SHIPPING</span>
            <span class="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="./img/return.png" alt="">
            <span class="featureTitle">30 DAYS RETURN</span>
            <span class="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="./img/gift.png" alt="">
            <span class="featureTitle">GIFT CARDS</span>
            <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="./img/contact.png" alt="">
            <span class="featureTitle">CONTACT US!</span>
            <span class="featureDesc">Keep in touch via email and support system.</span>
        </div>`

const product = document.querySelector('.product');
product.innerHTML = `<img src="./img/air.png" alt="" class="productImg">
        <div class="productDetails">
            <h1 class="productTitle">AIR FORCE</h1>
            <h2 class="productPrice">$199</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            <button class="productButton">BUY NOW!</button>
        </div>
        <div class="payment">
            <h1 class="payTitle">Personal Information</h1>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" class="payInput">
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" class="payInput">
            <label>Address</label>
            <input type="text" placeholder="Elton St 21 22-145" class="payInput">
            <h1 class="payTitle">Card Information</h1>
            <div class="cardIcons">
                <img src="./img/visa.png" width="40" alt="" class="cardIcon">
                <img src="./img/master.png" alt="" width="40" class="cardIcon">
            </div>
            <input type="password" class="payInput" placeholder="Card Number">
            <div class="cardInfo">
                <input type="text" placeholder="mm" class="payInput sm">
                <input type="text" placeholder="yyyy" class="payInput sm">
                <input type="text" placeholder="cvv" class="payInput sm">
            </div>
            <button class="payButton">Checkout!</button>
            <span class="close">X</span>
        </div>`

const gallery = document.querySelector('.gallery');
gallery.innerHTML = `<div class="galleryItem">
            <h1 class="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg">
        </div>
        <div class="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg">
            <h1 class="galleryTitle">This is the First Day of Your New Life</h1>
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg">
        </div>`

const newseason = document.querySelector('.newSeason');
newseason.innerHTML = `<div class="nsItem">
            <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="nsImg">
        </div>
        <div class="nsItem">
            <h3 class="nsTitleSm">WINTER NEW ARRIVALS</h3>
            <h1 class="nsTitle">New Season</h1>
            <h1 class="nsTitle">New Collection</h1>
            <a href="#nav">
                <button class="nsButton">CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="nsImg">
        </div>`


const footer = document.querySelector('.footer');
footer.innerHTML = `<div class="footerLeft">
            <div class="footerMenu">
                <h1 class="fMenuTitle">About Us</h1>
                <ul class="fList">
                    <li class="fListItem">Company</li>
                    <li class="fListItem"><span class="contact1">Contact</span></li>
                                    </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Useful Links</h1>
                <ul class="fList">
                    
                    <li class="fListItem"><span class="faq_qus">FAQ</span></li>
                    <li class="fListItem"><span class="feedback_rev">Feedback</span></li>
                    
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Products</h1>
                <ul class="fList">
                    <li class="fListItem">Air Force</li>
                    <li class="fListItem">Air Jordan</li>
                    <li class="fListItem">Blazer</li>
                    <li class="fListItem">Crater</li>
                    <li class="fListItem">Hippie</li>
                </ul>
            </div>
        </div>
        <div class="footerRight">
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
                <div class="fMail">
                    <input type="text" placeholder="your@email.com" class="fInput">
                    <button class="fButton">Join!</button>
                </div>
            </div>
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Follow Us</h1>
                <div class="fIcons">
                    <img src="./img/facebook.png" alt="" class="fIcon">
                    <img src="./img/twitter.png" alt="" class="fIcon">
                    <img src="./img/instagram.png" alt="" class="fIcon">
                    <img src="./img/whatsapp.png" alt="" class="fIcon">
                </div>
            </div>
            <div class="footerRightMenu">
                <span class="copyright">@All rights reserved. 2025.</span>
            </div>
        </div>`






const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});







var whole = document.querySelector('.whole');
var contact = document.querySelector('.contact1');
contact.addEventListener("click",() => {
 
  whole.innerHTML=`
    <section class="contact">
        <div class="content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                  
                    <div class="text">
                        <h3>Address</h3>
                        <p>Lorem ipsum dolor sit amet,<br> consectetur adipisicing elit,<br>Dolor,<br>55050</p>
                    </div>
                </div>

                <div class="box">
                    
                    <div class="text">
                        <h3>Email</h3>
                        <p>nike@gmail.com</p>
                    </div>
                </div>

                <div class="box">
                    
                    <div class="text">
                        <h3>Phone</h3>
                        <p>507-475-6094</p>
                    </div>
                </div>

            </div>
              <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required">
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required">
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name="" value="Send">
                    </div>
                </form>
              </div>

        </div>
    </section>

`
});

const faq_qus = document.querySelector('.faq_qus');
faq_qus.addEventListener("click",() => {
    whole.innerHTML = `<ul id="accordion">
  <li>
    <label for="first">What is Accordion?<span>&#x3e;</span></label>
    <input type="radio" name="accordion" id="first" checked>
    <div class="contents">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse maximus nisl tortor. In vitae sem in orci gravida semper.
        Aliquam maximus ullamcorper ligula vel vehicula. Nunc tincidunt mattis
        metus sed fermentum. Pellentesque gravida interdum ligula pulvinar
        eleifend. Maecenas sit amet turpis metus.
      </p>
    </div>
  </li>
  <li>
    <label for="second">How to create account?<span>&#x3e;</span></label>
    <input type="radio" name="accordion" id="second">
    <div class="contents">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse maximus nisl tortor. In vitae sem in orci gravida semper.
        Aliquam maximus ullamcorper ligula vel vehicula. Nunc tincidunt mattis
        metus sed fermentum. Pellentesque gravida interdum ligula pulvinar
        eleifend. Maecenas sit amet turpis metus.
      </p>
    </div>
  </li>
  <li>
    <label for="third">Where to use it?<span>&#x3e;</span></label>
    <input type="radio" name="accordion" id="third">
    <div class="contents">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse maximus nisl tortor. In vitae sem in orci gravida semper.
        Aliquam maximus ullamcorper ligula vel vehicula. Nunc tincidunt mattis
        metus sed fermentum. Pellentesque gravida interdum ligula pulvinar
        eleifend. Maecenas sit amet turpis metus.
      </p>
    </div>
  </li>
  <li>
    <label for="four">Offers for new users?<span>&#x3e;</span></label>
    <input type="radio" name="accordion" id="four">
    <div class="contents">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse maximus nisl tortor. In vitae sem in orci gravida semper.
        Aliquam maximus ullamcorper ligula vel vehicula. Nunc tincidunt mattis
        metus sed fermentum. Pellentesque gravida interdum ligula pulvinar
        eleifend. Maecenas sit amet turpis metus.
      </p>
    </div>
  </li>
  <li>
    <label for="five">Sing up?<span>&#x3e;</span></label>
    <input type="radio" name="accordion" id="five">
    <div class="contents">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse maximus nisl tortor. In vitae sem in orci gravida semper.
        Aliquam maximus ullamcorper ligula vel vehicula. Nunc tincidunt mattis
        metus sed fermentum. Pellentesque gravida interdum ligula pulvinar
        eleifend. Maecenas sit amet turpis metus.
      </p>
    </div>
  </li>

</ul>
`
  

});

const feedback = document.querySelector('.feedback_rev');
feedback.addEventListener("click", () => {
  whole.innerHTML=`<h2 class="rev">Reviews</h2>
    
    <div class="reviews">
        <div class="review1">
        <h4>George</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.</p>
        </div>
        <div class="review2">
        <h4>Jhon</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.</p>
        </div>
        <div class="review3">
        <h4>JOE</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.</p>
        </div>
        <div class="review4">
        <h4>Jerry</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.</p>
        </div>
        <div class="review5">
        <h4>James</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.</p>
        </div>
  </div>`
});