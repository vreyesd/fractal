import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentRow: {
    backgroundColor: 'rgba(255,0,0,0.3)',

    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  contentColumn: {
    backgroundColor: 'rgba(0,255,0,0.3)',

    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  marginColumn: {},
  paddingColumn: {},

  value: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  valueLabel: {
    color: '#aaa',
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },

  marginTopButton: {},
  marginTopButtonImage: {
    width: 247,
    height: 34,
  },
  marginRightButton: {},
  marginRightButtonImage: {
    width: 34,
    height: 221,
  },
  marginBottomButton: {},
  marginBottomButtonImage: {
    width: 247,
    height: 34,
  },
  marginLeftButton: {},
  marginLeftButtonImage: {
    width: 34,
    height: 221,
  },

  paddingTopButton: {},
  paddingTopButtonImage: {
    width: 171,
    height: 34,
  },
  paddingRightButton: {},
  paddingRightButtonImage: {
    width: 34,
    height: 145,
  },
  paddingBottomButton: {},
  paddingBottomButtonImage: {
    width: 171,
    height: 34,
  },
  paddingLeftButton: {},
  paddingLeftButtonImage: {
    width: 34,
    height: 145,
  },
});