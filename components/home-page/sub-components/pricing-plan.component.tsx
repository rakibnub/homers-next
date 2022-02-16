import {FC} from 'react';
import {Container, Grid,Box} from '@mui/material';
import {H1,H2,P,H4,ButtonComponent} from '@lib/index';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styles from './pricing-plan.module.scss';

export const PRICING_PLANS = [
  {
    plan: 'Free',
    price: '$0',
    children:[
      { text:'20 Listing', icon:<CheckIcon/>, class:'check' },
      { text:'Shared Dashboard', icon:<CheckIcon/>, class:'check' },
      { text:'Send Mail Link Sender', icon:<CheckIcon/>, class:'check' },
      { text:'Optimize', icon:<CheckIcon/>, class:'check' },
      { text:'Unlimited users', icon:<CloseIcon/>, class:'cross' },
      { text:'Multi-accounts', icon:<CloseIcon/>, class:'cross' },
      { text:'Basic invoicing', icon:<CloseIcon/>, class:'cross' }
    ]
  },
  {
    plan: 'Basic',
    price: '$19',
    children:[
      { text:'20 Listing', icon:<CheckIcon/>, class:'check' },
      { text:'Shared Dashboard', icon:<CheckIcon/>, class:'check' },
      { text:'Send Mail Link Sender', icon:<CheckIcon/>, class:'check' },
      { text:'Optimize', icon:<CheckIcon/>, class:'check' },
      { text:'Unlimited users', icon:<CloseIcon/>, class:'cross' },
      { text:'Multi-accounts', icon:<CloseIcon/>, class:'cross' },
      { text:'Basic invoicing', icon:<CloseIcon/>, class:'cross' }
    ]
  },
  {
    plan: 'Popular',
    price: '$35',
    children:[
      { text:'20 Listing', icon:<CheckIcon/>, class:'check' },
      { text:'Shared Dashboard', icon:<CheckIcon/>, class:'check' },
      { text:'Send Mail Link Sender', icon:<CheckIcon/>, class:'check' },
      { text:'Optimize', icon:<CheckIcon/>, class:'check' },
      { text:'Unlimited users', icon:<CheckIcon/>, class:'check' },
      { text:'Multi-accounts', icon:<CheckIcon/>, class:'check' },
      { text:'Basic invoicing', icon:<CheckIcon/>, class:'check' }
    ]
  },
  {
    plan: 'Enterprise',
    price: '$190',
    children:[
      { text:'20 Listing', icon:<CheckIcon/>, class:'check' },
      { text:'Shared Dashboard', icon:<CheckIcon/>, class:'check' },
      { text:'Send Mail Link Sender', icon:<CheckIcon/>, class:'check' },
      { text:'Optimize', icon:<CheckIcon/>, class:'check' },
      { text:'Unlimited users', icon:<CheckIcon/>, class:'check' },
      { text:'Multi-accounts', icon:<CheckIcon/>, class:'check' },
      { text:'Basic invoicing', icon:<CheckIcon/>, class:'check' }
    ]
  }
];

const PricingPlanComponent: FC = () => {
  return (
    <div className={`${styles.pricing_plan}`}>
        <Container>
            <H2 text="Pricing plans for membership"/>
            <P text='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.'/>

            <Grid container spacing={5} alignItems="center">
                  {PRICING_PLANS.map((planItem, index) => {
                      return (
                        <Grid item xs={12} sm={6} md={3} key={index} className={(index===2?`${styles.selected}` :'')}>
                          <Box className={`${styles.pricing_box}`}>
                            <H4 text={planItem.plan}/>
                            <H1 color='black' text={planItem.price}/><span>/month</span>
                            <ul>
                            {planItem.children.map((childItem, i) => {
                              return (
                                <li key={i}>
                                    <span className={(childItem.class==='check'?`${styles.check}` :`${styles.cross}`)}>
                                      {childItem.icon}
                                    </span>
                                    {childItem.text}
                                </li>
                              );
                            })}
                            </ul>
                            <ButtonComponent
                                  onClickHandler={() => {}}
                                  buttonText={`Buy ${planItem.plan}`}
                                  variant="contained"
                                  formType="button"
                            />
                          </Box>
                        </Grid>
                      );
                  })}
            </Grid>
        </Container>
      </div>
  );
};

export default PricingPlanComponent;