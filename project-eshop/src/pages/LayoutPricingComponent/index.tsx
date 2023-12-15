import * as Styles from './styles';

export default function LayoutPricingComponent() {
  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <Styles.Box background='green900' gridRepeatRows={3}>
            <h2>Join our community</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              quos. Temporibus quo dolorem ducimus amet asperiores accusamus
              iure alias debitis?
            </p>
          </Styles.Box>
          <Styles.Box background='green700' gridRepeatRows={3}>
            <h3>Monthly Subscription</h3>
            <p>
              <span>$14 per month</span>{' '}
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                qui, eos architecto necessitatibus et voluptas! Nam iste
                molestiae vel ex.
              </span>
            </p>
            <Styles.Link alt='' to='/'>
              Singn Up
            </Styles.Link>
          </Styles.Box>
          <Styles.Box background='green800' gridRepeatRows={2}>
            <h3>Why Us</h3>
            <ul>
              <li>Up to 1 User</li>
              <li>All UI Components</li>
              <li>Lifetime Access</li>
              <li>Free Updates</li>
              <li>Community Support</li>
              <li>Downloadable Files</li>
            </ul>
          </Styles.Box>
        </Styles.Content>
      </Styles.Container>
    </>
  );
}
