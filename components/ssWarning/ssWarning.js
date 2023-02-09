import { Dialog, Typography } from "@mui/material";
import classes from "./ssWarning.module.css";
import { useAppThemeContext } from '../../ui/AppThemeProvider';

export default function ffWarning({close, title, subTitle, icon, description, btnLabel1, btnLabel2, action2, showTitle = true}) {
  const navigateToMedium = () => {
    window.open("https://medium.com/@SterlingSwap", "_blank");
  };

  const {appTheme} = useAppThemeContext();

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={close}
      onClick={(e) => {
        if (e.target.classList.contains('MuiDialog-container')) {
          close()
        }
      }}
      className={classes.dialogWrapper}
      classes={{
        paper: appTheme === "dark" ? classes['paperBody--dark'] : classes['paperBody--light'],
      }}>
      <div className={classes.dialogContainer}>
        <div className={[classes.warningContainer, classes[`warningContainer--${appTheme}`]].join(' ')}>
          <div
            style={{
              position: 'absolute',
              top: -30,
              left: -1,
              display: 'flex',
              width: '100%',
            }}>
            <div
              style={{
                background: 'transparent',
                width: 0,
                height: 0,
                top: 4,
                left: -2,
                transform: 'rotate(360deg)',
                borderStyle: 'solid',
                borderWidth: '0px 0px 30px 30px',
                borderColor: `transparent transparent ${appTheme === "dark" ? '#855f5f' : '#86B9D6'}`,
              }}>
              <div
                style={{
                  position: 'relative',
                  top: 3,
                  left: -28,
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0px 0px 27px 28px',
                  borderColor: `transparent transparent ${appTheme === "dark" ? '#151718' : '#DBE6EC'}`,
                }}>
              </div>
            </div>

            <div
              style={{
                background: appTheme === "dark" ? '#151718' : '#DBE6EC',
                width: 'calc(100% - 28px)',
                height: 30,
                borderTop: `1px solid ${appTheme === "dark" ? '#855f5f' : '#DBE6EC'}`,
                borderRight: `1px solid ${appTheme === "dark" ? '#855f5f' : '#DBE6EC'}`,
                marginLeft: 0,
                zIndex: 2,
                position: 'absolute',
                left: 30,
              }}>
            </div>
          </div>

          {showTitle && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <img
                src={appTheme === "dark" ? `/images/${icon ? icon : 'icon-warning'}--dark.svg` : `/images/${icon ? icon : 'icon-warning'}.svg`}
                className={classes.warningIcon}/>

              <Typography className={[classes.title1, classes[`title1--${appTheme}`]].join(' ')}>
                {title ? title : 'Sterling Disclaimer:'}
              </Typography>
            </div>
          )}

          <Typography className={[classes.title2, classes[`title2--${appTheme}`]].join(' ')}>
            {subTitle ? subTitle : 'Acknowledgement of Terms & Conditions of access'}
          </Typography>

          <Typography
            className={[classes.paragraph, classes[`paragraph--${appTheme}`]].join(' ')}
            align="center">
            {description
              ? description
              : <>
                <span
                  className={classes.paragraph1}
                  style={{
                    color: appTheme === "dark" ? '#ffffff' : '#0A2C40',
                  }}>
                  Use of the Sterling.exchange website, services, dapp, or application is subject to the following Terms & Conditions and hereby confirm that by proceeding and interacting with the protocoL I am aware of these and accept them in full:
                </span>
                <br/><br/>
                Sterling.exchange is a smart contract protocol in alpha stage of launch, and even though multiple
                security
                audits have been completed on the smart contracts, I understand the risks associated with using the
                Sterling protocol and associated functions.
                <br/><br/>
                Any interactions that I have with the associated Sterling protocol apps, smart contracts or any related
                functions MAY place my funds at risk, and hereby release the Sterling protocol and its contributors,
                team
                members, and service providers from any and all liability with my use of the above-mentioned functions.
                <br/><br/>
                I am lawfully permitted to access this site and use the sterling.exchange application functions, and I
                am
                not in contravention of any laws governing my jurisdiction of residence or citizenship.
              </>
            }
          </Typography>

          <div className={classes.buttonsContainer}>
            <div
              className={[classes.primaryButton, classes[`primaryButton--${appTheme}`]].join(' ')}
              onClick={close}>
              <Typography className={classes.buttonTextPrimary}>
                {btnLabel1 ? btnLabel1 : 'I understand the risks involved, proceed to the app'}
              </Typography>
            </div>

            <div
              className={[classes.secondaryButton, classes[`secondaryButton--${appTheme}`]].join(' ')}
              onClick={action2 ? action2 : navigateToMedium}>
              <Typography
                className={[classes.buttonTextSecondary, classes[`buttonTextSecondary--${appTheme}`]].join(' ')}>
                {btnLabel2 ? btnLabel2 : 'Read more about it on the Medium article'}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
