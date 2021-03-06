// @flow
import colors from './Colors'
export let getTopBarOptions = () => ({
  visible: true,
  animate: true,
  noBorder: true,
  backButton: {
    color: colors.white,
    visible: true
  },
  background: {
    color: colors.imperial
  }
})
