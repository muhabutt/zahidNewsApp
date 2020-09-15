import {StyleSheet, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');

// define your styles
const base = StyleSheet.create({
  openMenu: {
    width: '100%',
  },
  dropDownHeight: {
    height: height * 0.12,
  },
  headerHeight: {
    height: height * 0.08,
  },
  justify_content_center: {
    justifyContent: 'center',
  },
  justify_content_start: {
    justifyContent: 'flex-start',
  },
  justify_content_end: {
    justifyContent: 'flex-end',
  },
  align_items_center: {
    alignItems: 'center',
  },
  align_items_start: {
    alignItems: 'flex-start',
  },
  align_items_end: {
    alignItems: 'flex-end',
  },
  flex_direction_row: {
    flexDirection: 'row',
  },
  logo: {
    height: height * 0.08,
    width: width * 0.2,
  },
  defaultLogo: {
    flex: 0.09,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: width * 0.05,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Sen-Bold',
  },
  h2: {
    fontSize: width * 0.04,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Sen-Bold',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  logoHeading: {
    fontSize: height * 0.03,
    fontFamily: 'Sen-Bold',
    color: 'white',
  },
  logoCaption: {
    fontSize: width * 0.03,
    fontFamily: 'Roboto-Bold',
    fontStyle: 'italic',
    color: 'white',
  },
  input: {
    width: '75%',
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: 5,
    fontSize: width * 0.05,
    borderColor: '#333',
    borderWidth: 1,
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Sen-Regular',
  },
  dropDownContainer: {
    backgroundColor: '#dedad9',
    borderColor: '#dedad9',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    margin: height * 0.015,
  },
  label: {
    width: '25%',
    fontSize: width * 0.05,
    borderColor: '#333',
    fontFamily: 'Sen-Bold',
  },
  button: {
    backgroundColor: '#4B7A9E',
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  headerBackButton: {
    height: '80%',
    width: '100%',
  },
  btnText: {
    fontSize: width * 0.03,
    fontFamily: 'Roboto-Regular',
    color: '#fff',
  },

  fullBottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  floatRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  floatLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export const utilities = StyleSheet.create({
  w100: {
    width: '100%',
  },
  mlM8: {
    marginLeft: -8,
  },
  m15: {
    margin: height * 0.015,
  },
  m25: {
    margin: height * 0.025,
  },
  p15: {
    padding: height * 0.015,
  },
  p25: {
    padding: height * 0.025,
  },
  mt15: {
    marginTop: height * 0.015,
  },
  mb15: {
    marginBottom: height * 0.015,
  },
  mt25: {
    marginTop: height * 0.025,
  },
  mt35: {
    marginTop: height * 0.035,
  },
  mb35: {
    marginBottom: height * 0.035,
  },
  ml15: {
    marginLeft: height * 0.015,
  },
  mr15: {
    marginRight: height * 0.015,
  },
  pt15: {
    paddingTop: height * 0.015,
  },
  pb15: {
    paddingBottom: height * 0.015,
  },
  pl15: {
    paddingLeft: height * 0.015,
  },
  pr15: {
    paddingRight: height * 0.015,
  },
  pt25: {
    paddingTop: height * 0.025,
  },
  pb25: {
    paddingBottom: height * 0.025,
  },
  pt35: {
    paddingTop: height * 0.035,
  },
  pb35: {
    paddingBottom: height * 0.035,
  },
  font35: {
    fontSize: width * 0.04,
    fontFamily: 'Roboto-Regular',
    color: '#fff',
  },
});

export const colors = StyleSheet.create({
  grayBackground: {
    backgroundColor: '#4B7A9E',
  },
  lightGrayBackground: {
    backgroundColor: '#E7EAED',
  },
  appBackground: {
    backgroundColor: '#EFF0F1',
  },
  blue: {
    color: 'blue',
  },
  white: {
    color: 'white',
  },
  loaderScreen: {
    backgroundColor: '#82A9C6',
    opacity: 0.5,
  },
});

export const articleItem = StyleSheet.create({
  article_container: {
    paddingHorizontal: height * 0.015,
    margin: height * 0.015,
    backgroundColor: '#dedad9',
    borderRadius: 10,
  },
  article_banner: {
    marginVertical: height * 0.015,
    borderWidth: 2,
    borderColor: '#BAB2B1',
  },
  article_title: {
    fontFamily: 'Roboto-Light',
    fontSize: width * 0.04,
    textAlign: 'left',
    borderBottomColor: '#BAB2B1',
    paddingVertical: height * 0.01,
    marginHorizontal: height * 0.015,
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  article_anchor: {
    fontFamily: 'Roboto-Light',
    fontSize: width * 0.04,
    textAlign: 'center',
    backgroundColor: '#BAB2B1',
    padding: height * 0.01,
    marginHorizontal: height * 0.0011,
    marginVertical: height * 0.01,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  article_description: {
    fontSize: width * 0.05,
    fontFamily: 'Roboto-Light',
    marginHorizontal: height * 0.015,
    paddingVertical: height * 0.015,
    fontStyle: 'italic',
  },
  article_row: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  article_borderBottom: {
    borderBottomColor: '#737170',
    borderBottomWidth: 1,
  },
  article_label: {
    fontSize: width * 0.04,
    paddingHorizontal: height * 0.015,
    fontStyle: 'normal',
    fontFamily: 'Roboto-Bold',
  },
  article_span: {
    fontSize: width * 0.03,
    paddingHorizontal: height * 0.015,
    fontStyle: 'italic',
    fontFamily: 'Roboto-LightItalic',
    textAlignVertical: 'center',
  },
  article_content: {
    fontSize: width * 0.05,
    padding: 5,
    fontFamily: 'Roboto-Thin',
    textAlignVertical: 'center',
  },
  article_detail_banner: {
    height: width * 0.5,
    marginHorizontal: height * 0.012,
    marginVertical: height * 0.012,
    paddingVertical: height * 0.015,
  },
  article_default_banner: {
    height: height * 0.3,
    width: '95%',
    marginHorizontal: height * 0.012,
    marginVertical: height * 0.012,
    paddingVertical: height * 0.015,
  },
});

export const cols = StyleSheet.create({
  col1: {
    flex: 0.25,
  },
  col2: {
    flex: 0.5,
  },
  col3: {
    flex: 0.75,
  },
  col4: {
    flex: 1,
  },
  flex1: {
    flex: 1.1,
  },
  flex2: {
    flex: 2.1,
  },
  flex3: {
    flex: 3.1,
  },
  w25: {
    width: '25%',
  },
  w45: {
    width: '45%',
  },
});
export const styles = {
  ...base,
  ...articleItem,
  ...colors,
  ...cols,
  ...utilities,
};

export default styles;
