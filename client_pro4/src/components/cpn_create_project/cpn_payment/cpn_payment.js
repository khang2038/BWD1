import "./Payment.css";
function Cpn_Payment({ func }) {
  return (
    <div className="payment_wrap">
      <div className="payment_content">
        <div className="payment_header">
          <div className="payment_headline">Add new payment method</div>
          <span className="payment_btn_back" onClick={func.handlerSwitch}>
            back
          </span>
        </div>
        <form action="" className="payment_form">
          <div className="payment_group">
            <label htmlFor="">Card number</label>
            <input type="text" placeholder="1234 1234 1234 1234" />
          </div>
          <div className="payment_group expiration">
            <label htmlFor="">Expiration</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="payment_group cvc">
            <label htmlFor="">CVC</label>
            <input type="text" placeholder="CVC" />
          </div>
          <div className="payment_group country">
            <label for="">Country</label>
            <select id="cars">
              <option value="Vietnam">Vietnam</option>
              <option value="US">US</option>
              <option value="China">China</option>
            </select>
          </div>
          <div className="payment_group checkbox">
            <input type="checkbox" />
            <label for="">Remember this payment method</label>
          </div>
        </form>

        <div className="payment_wrap_img">
          <div className="payment_img_content">
            <div className="payment_img-cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="payment_img_headline">
              Rewards aren't guaranteed.
            </div>
          </div>
        </div>
        <div className="payment_wrap_rules">
          <div className="payment_backer_img"></div>
          <div className="rules_content">
            <div className="rules_headline">
              Backing means supporting a creative project, regardless of the
              outcome.
            </div>
            <div className="rules_wrap_checkbox">
              <input type="checkbox" id="rules_wrap_checkbox" />
              <label className="rules_label" for="rules_checkbox">
                I understand that rewards or reimbursements aren’t guaranteed by
                either Kickstarter or the creator.
              </label>
            </div>
          </div>
        </div>
        <div style={{display : 'flex', justifyContent : 'space-between'}}>
          <div class="QR" style={{borderRadius : '10px',backgroundColor: '#dddada',padding: '16px 0',textAlign : 'center' ,width : '10%',color : 'black',margin : '20px 0',}}>
            Scan QR
          </div>

          <div className="payment_submit" onClick={func.handlerMessageSuccess}>
            Pledge
          </div>

        </div>

        <div className="payment_policy">
          By submitting your pledge, you agree to Kickstarter's
          <a> Terms of Use,</a> and <a>Privacy Policy,</a>
          Privacy Policy
        </div>
      </div>
    </div>
  );
}

export default Cpn_Payment;
