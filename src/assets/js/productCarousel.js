const productState = {
    current: 0,
    total: 4,
    lock: false,
}

const previousButton = document.querySelectorAll(".btn-previous-productCarousel")
const nextButton = document.querySelectorAll(".btn-next-productCarousel")
const productCarouselImagesMobile = document.querySelectorAll(".img-product-carousel-md")
const productCarouselImagesDesktop = document.querySelectorAll(".img-product-carousel-lg")
const productInfoImages = document.querySelectorAll(".img-product-info")
const productThumbnails = document.querySelectorAll(".thumbnail")
const productInfoThumbnails = document.querySelectorAll(".thumbnail-info")
const productDesktopThumbnails = document.querySelectorAll(".thumbnail-lg")
const productCarouselAnimationDurationMs = 200;

const closeButton = document.getElementById("btn-closeLightBox")
const lightBox = document.getElementById("dialog-lightbox")

function changeImageShrink(elements, current, next) {
    elements[current].classList.remove("pop-out");
    elements[current].classList.add("pop-in");
    elements[next].classList.add("pop-in");
    document.querySelector(".thumbnail-info.selected")?.classList.remove("selected");
    document.querySelector(".thumbnail-lg.selected")?.classList.remove("selected");
}

function changeImageGrow(elements, current, next) {
    elements[next].classList.remove("pop-in");
    elements[current].classList.remove("pop-in", "z-20");
    elements[next].classList.add("pop-out", "z-20");
    productInfoThumbnails[next].classList.add("selected");
    productDesktopThumbnails[next].classList.add("selected");
}

function changeProductImage(next) {
    changeImageShrink(productCarouselImagesMobile, productState.current, next);
    changeImageShrink(productInfoImages, productState.current, next);
    changeImageShrink(productCarouselImagesDesktop, productState.current, next);
    setTimeout(() => {
        changeImageGrow(productCarouselImagesMobile, productState.current, next);
        changeImageGrow(productInfoImages, productState.current, next);
        changeImageGrow(productCarouselImagesDesktop, productState.current, next);

        productState.current = next;
        productState.lock = false;
    }, productCarouselAnimationDurationMs);
}

nextButton.forEach(elem => {
    elem.addEventListener("click", () => {
        if (productState.lock) return;
        productState.lock = true;

        let next = (productState.current + 1) % productState.total;
        changeProductImage(next);
    })
})

previousButton.forEach(elem => {
    elem.addEventListener("click", () => {
        if (productState.lock) return;
        productState.lock = true;

        let next = (productState.total + productState.current - 1) % productState.total;
        changeProductImage(next);
    })
})

productThumbnails.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        if (productState.lock) return;
        productState.lock = true;

        let next = index % productState.total;
        changeProductImage(next);
    })
})

productInfoImages.forEach(elem => {
    elem.addEventListener("click", ()=>{
        lightBox.setAttribute("open", true);
    })
})

closeButton.addEventListener("click", () => {
    lightBox.removeAttribute("open");
})