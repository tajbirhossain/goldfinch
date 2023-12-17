const accordion = document.querySelector(".questionsWrap")
const accordionChild = accordion.querySelectorAll(".singleQuestion")


accordionChild.forEach((item, i) => {
    const accordionHeading = item.querySelector(".questionTop")
    const accordionText = item.querySelector(".questionInfo")
    if (item.classList.contains("active")) {
        item.style = `height: ${accordionHeading.clientHeight + accordionText.clientHeight}px`
    } else {
        item.style = `height: ${accordionHeading.clientHeight}px`
    }
    accordionHeading.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
            item.style = `height: ${accordionHeading.clientHeight}px`
        } else {
            item.classList.add("active")
            item.style = `height: ${accordionHeading.clientHeight + accordionText.clientHeight}px`
        }

    })
})