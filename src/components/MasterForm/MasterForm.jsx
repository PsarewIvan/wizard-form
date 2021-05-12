import React from 'react';
import { connect } from 'react-redux';
import {
  changePlan,
  changeTerm,
  changeSlots,
} from './../../redux/order-reducer';
import Step1 from './../Step1/Step1';
import Step2 from './../Step2/Step2';
import Step3 from './../Step3/Step3';
import Button from './../Button/Button';
import Pagination from './../Pagination/Pagination';
import './MasterForm.scss';

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveNext: false,
      isActivePrev: true,
      paginationName: ['План подписки', 'Срок подписки', 'Оплата'],
    };
  }

  _next = () => {
    let currentStep = this.props.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.props.changeStep(currentStep);
  };

  _prev = () => {
    let currentStep = this.props.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.props.changeStep(currentStep);
  };

  changePlan = (id) => {
    this.props.changePlan(id);
    this.setState({ isActiveNext: true });
  };

  changeSlots = (value) => {
    this.setState({ isActiveNext: value >= this.props.minSlotsNumber });
    this.props.changeSlots(value);
  };

  render() {
    return (
      <>
        <form className="master-form">
          <div className="master-form__main">
            <Step1
              currentStep={this.props.currentStep}
              plans={this.props.plans}
              slotsNumber={this.props.slotsNumber}
              minSlotsNumber={this.props.minSlotsNumber}
              changePlan={this.changePlan}
              changeSlots={this.changeSlots}
            />
            <Step2
              currentStep={this.props.currentStep}
              changeTerm={this.props.changeTerm}
              subscriptions={this.props.subscriptions}
              totalCostForSelect={this.props.totalCostForSelect}
            />
            <Step3 currentStep={this.props.currentStep} />
          </div>
          <div className="master-form__button">
            {this.props.currentStep < 4 ? (
              <Button
                name="Продолжить"
                onClick={this._next}
                isActive={
                  this.state.isActiveNext && this.props.currentStep !== 3
                }
              />
            ) : null}
            {this.props.currentStep !== 1 && this.props.currentStep < 4 ? (
              <Button
                name="< Вернуться назад"
                onClick={this._prev}
                isActive={this.state.isActivePrev}
                mod="prev"
              />
            ) : null}
          </div>
          {this.props.currentStep < 4 ? (
            <div className="master-form__pagination">
              <Pagination
                currentStep={this.props.currentStep}
                name={this.state.paginationName}
              />
            </div>
          ) : null}
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  plans: state.data.data,
  planId: state.order.id,
  slotsNumber: state.order.slotsNumber,
  minSlotsNumber: state.order.minSlotsNumber,
  subscriptionTerm: state.order.subscriptionTerm,
  slotCost: state.order.slotCost,
  subscriptions: state.data.subscriptions,
  totalCostForSelect: state.order.totalCostForSelect,
});

export default connect(mapStateToProps, {
  changePlan,
  changeTerm,
  changeSlots,
})(MasterForm);
