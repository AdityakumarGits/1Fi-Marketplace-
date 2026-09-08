export default function EmiPlanCard({plan,selected,onSelect}){return <button type="button" className={`emi-plan ${selected?"selected":""}`} onClick={onSelect}>
  <span className="radio"><span/></span><span><strong>{plan.label}</strong><small>{plan.interest}% interest</small></span><span className="emi-amount"><strong>₹{plan.monthly.toLocaleString("en-IN")}</strong><small>per month</small></span>
</button>}
