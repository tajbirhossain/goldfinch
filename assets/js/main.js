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









const toggleContentWrap = [
    `
    <div class="doContentWrap">
    <div class="doContentLeft">
        <div class="doLeftItem">
            <p>
                Streamline communication among landlords, tenants, and service providers on a
                centralised platform.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Provider Selection:</h3>
            <p>
                Enables landlords to choose qualified service providers for prompt and reliable
                repairs.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Real-time Updates:</h3>
            <p>
                Facilitates instant updates on repair progress, ensuring transparency and
                efficiency.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Documented Records:</h3>
            <p>
                Maintains clear records of repair requests and
                completed work for accountability.
            </p>
        </div>
    </div>
    <div class="doContentRight">
        <img src="assets/images/Icons/pexels-ksenia-chernaya-5691544.jpg" alt="">
    </div>
</div>
    `,


    
    `
    <div class="doContentWrap">
    <div class="doContentLeft">
        <div class="doLeftItem">
            <p>
                We simplified image comparison for landlords by 
                enabling easy uploads of check-in and checkout photos to document property condition and identify changes.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Effortless Image Comparison:</h3>
            <p>
                Allows landlords to easily upload check-in and checkout photos.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>User-Friendly Uploads:</h3>
            <p>
                The platform compares these images, providing a visual record of the property's condition.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Visual Documentation:</h3>
            <p>
                This enhances transparency by visually documenting the property's condition during both check-in and checkout processes.
            </p>
        </div>
    </div>
    <div class="doContentRight">
        <img src="assets/images/Icons/room.jpg" alt="">
    </div>
</div>
    `,


    `
    <div class="doContentWrap">
    <div class="doContentLeft">
        <div class="doLeftItem">
            <p>
                Simplifies the contract generation process, providing landlords with a versatile tool to meet legal 
                requirements and customise agreements as needed.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Assured Shorthold Tenancy (AST) Generator:</h3>
            <p>
                Offers a user-friendly tool for UK landlords to create AST agreements, guiding users through necessary steps to ensure a comprehensive and legally sound agreement.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Customizable Agreements:</h3>
            <p>
                Lets landlords customize tenancy agreements based on specific requirements and legal considerations, offering flexibility for individual property arrangements.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Diverse Tenancy Options:</h3>
            <p>
                Supports various tenancy agreements (fixed-term, 
                periodic, joint, individual, etc.), allowing landlords to cater agreements to the unique needs of their rental
            </p>
        </div>
    </div>
    <div class="doContentRight">
        <img src="assets/images/Icons/pexels-greta-hoffman-7674820.jpg" alt="">
    </div>
</div>
    `,


    `
    <div class="doContentWrap">
    <div class="doContentLeft">
        <div class="doLeftItem">
            <p>
                We've simplified document management, promoting accessibility, security, and efficient collaboration.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Centralised Document Repository:</h3>
            <p>
                Store essential property management documents, 
                ensuring easy access to items like Energy Performance Certificates (EPC), tenancy agreements, and safety certificates.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Effortless Document Sharing:</h3>
            <p>
                Facilitates secure sharing of vital documents among landlords, tenants, and relevant parties, enhancing 
                collaboration through centralized access to essential information.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Comprehensive Document Storage:</h3>
            <p>
                Storage solution ensuring secure storage and easy 
                retrieval of crucial documents as needed.
            </p>
        </div>
    </div>
    <div class="doContentRight">
        <img src="assets/images/Icons/cloud-optimization-about-us-1000x0-c-default.png" alt="">
    </div>
</div>
    `,


    `
    <div class="doContentWrap">
    <div class="doContentLeft">
        <div class="doLeftItem">
            <p>
                Simplified contract generation for landlords, 
                offering a versatile tool to meet legal requirements and customize agreements as needed.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Assured Shorthold Tenancy (AST) Generator:</h3>
            <p>
                Create AST agreements, guiding users through necessary steps to ensure a comprehensive and legally sound agreement.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Customizable Agreements:</h3>
            <p>
                Customize tenancy agreements based on specific 
                requirements and legal considerations, providing flexibility for terms tailored to individual property 
                arrangements.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Diverse Tenancy Options:</h3>
            <p>
                Supports creation of various tenancy agreements, 
                allowing landlords to tailor agreements to their rental needs.
            </p>
        </div>
    </div>
    <div class="doContentRight">
        <img src="assets/images/Icons/4577841.jpg" alt="">
    </div>
</div>
    `,


    `
    <div class="doContentWrap">
    <div class="doContentLeft">
        <div class="doLeftItem">
            <p>
                Streamlined rent collection, providing a versatile tool to meet legal requirements and  collection 
                processes as needed.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Automated Rent Collection:</h3>
            <p>
                Automated rent collection guides users through setup for a comprehensive and hassle-free process.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Tailored Collection Terms:</h3>
            <p>
                Tailor terms to meet specific requirements and legal considerations, providing flexibility for individual lease arrangements.
            </p>
        </div>
        <div class="doLeftItem">
            <h3>Diverse Collection Options:</h3>
            <p>
                Supports various rent collection methods, enabling landlords to tailor the process to meet their specific rental needs.
            </p>
        </div>
    </div>
    <div class="doContentRight">
        <img src="assets/images/Icons/closeup-woman-using-smart-phone-while-learning-evening-home.jpg" alt="">
    </div>
</div>
    `,
]







const weDoContentContainer = document.querySelector(".weDoContentContainer")
const doContentTopSingles = document.querySelectorAll(".doContentTopSingle")

weDoContentContainer.innerHTML = toggleContentWrap[0]

doContentTopSingles.forEach((item,i) => {
    item.addEventListener("click", () => {
        doContentTopSingles.forEach(val => {
            val.classList.remove("active")
        })
        item.classList.add("active")
        weDoContentContainer.innerHTML = toggleContentWrap[i]
    })
})