import React from 'react'
import Section from '../components/Section'

class SpecimenExample extends React.Component {
  render () {
    const self = this
    const data = self.props.data
    const font = data.fonts['nikukyu']

    return (
      <Section maxWidth={5} className="bg-fallback-green black wf-nikukyu">

      <div className="mx-auto max-width-5">
          <div className="col-12">

            <div className="relative justify-center green flex h0 my4 sm-my0 line-height-1">
              <span className="block align-bottom"><br/>トン</span>
              <span className="block align-top">トン</span>
            </div>

            <div className="relative justify-end flex h1 my4 sm-my0 line-height-1">
              <span className="block align-bottom" style={{ transform: 'rotate(' + 5 + 'deg)' }}><br/>ピョン</span>
              <span className="block align-top" style={{ transform: 'rotate(' + 5 + 'deg)' }}>ピョン</span>
            </div>

            <div className="relative my4 sm-my0 h0">
              <span>モタ　モタ</span>
            </div>

            <div className="relative max-width-4 mx-auto mb4">
              <div data-prefix="チョコ チョコ" className="img-nikukyu-ladybug">
              <img src="/media/illustration-nikukyu-ladybug.svg" style={{ width: 35 + 'px' }} />
              </div>
              <div className="flex items-baseline line-height-1 green">
                <div className="col-6">
                  <div className="js-fitterHappierText">
                    <span className="h1">スタ</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="h0">スタ</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </Section>
    )
  }
}

export default SpecimenExample