const Contact = () => {
    return <div class="contact">
        <div class="conh">
            <h2 class="conh1">GET <span class="conh2">IN TOUCH</span></h2>
        </div>
        <div class="conhsub">
            <p><span class="headtext2">---</span> I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
                <span class="headtext2">---</span></p>
        </div>
        <div class="con1">
            <div class="coninfo">
                <div class="phone">
                    <h6 class="phhead acc-title">Phone</h6>
                    <h5 class="phno acc-id">7219294594</h5>
                </div>
                <div class="mail acc">
                    <h6 class="mailhead acc-title">Mail</h6>
                    <h5 class="mailid acc-id">pramodkesarakar@gmail.com</h5>
                </div>
                <div class="linkedin acc">
                    <h6 class="lkhead acc-title">Linkedin</h6>
                    <h5 class="lkid acc-id">Pramod Kesarkar</h5>
                </div>
                <div class="insta acc">
                    <h6 class="lkhead acc-title">Instagram</h6>
                    <h5 class="lkid acc-id">pramod_Kesarkar1</h5>
                </div>
            </div>
            <div class="main-form">
                <div class="form-body">
                    <div class="form-name">
                        <label for="form-name">Enter your Name</label>
                        <input class="form-size-style" type="text" placeholder="  Name" id="form-name" name="form-name" />
                    </div>
                    <div class="form-mail">
                        <label for="form-mail">Enter your Mail Id</label>
                        <input class="form-size-style" type="email" placeholder="  Name@example.com" id="form-mail" name="form-mail" />
                    </div>
                </div>
                <div class="form-text">
                    <label for="form-text">Enter your Massege here</label>
                    <textarea class="form-size-style2" name="form-text" id="form-text" rows="5"></textarea>
                </div>
                <div class="form-button-container">
                <input class="button b1" type="button" value="Submit"></input>
                </div>
            </div>
        </div>
        <div class="msgend">
            <p><span class="msgend1">Thank You! </span>Contact Me for more information and projects</p>
        </div>
        <div class="linebg">

            <p class="line"></p>
        </div>

    </div>;
};

export default Contact;





