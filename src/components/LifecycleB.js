import React, { Component } from 'react';

class LifecycleB extends Component {
  /**
   * this is the first function that gets executed
   * whenever a new component is created
   * */
  constructor(props) {
    /**
     * super keyword will call
     * the base class constructor
     */
    super(props);

    this.state = {
      name: 'Ankush Thakur',
    };

    console.log('LifecycleB constructor');
  }

  /**
   * this is the second method that gets called in mounting
   * phase. This takes two params props and state and returns
   * either state or null
   */
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB static getDerivedStateFromProps');
    return null;
  }

  /**
   * NOTE:
   *
   * Last method of mounting phase.
   *
   * Invoked immediately after a component and all it's
   * childern compenents have been rendered to the DOM.
   *
   * Here we can cause side effects. Example: Interact with
   * the DOM or perform any AJAX calls to load data.
   *
   */
  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  /**
   * NOTE:
   *
   * This is the third method that gets executed
   * in mounting phase.
   *
   * Only method that is required.
   *
   * Reads props and state and returns JSX.
   *
   * Donot change state or interact with DOM or make AJAX calls here.
   *
   * Childern components lifecycle methods are also executed.
   */

  /**
   * Note:
   *
   * This method dictates if at all component
   * should rerender or not.
   *
   * What we can do here is compare the current props and
   * current state with next props and next state and decide
   * whether the component should re-render or not. So, this
   * method is basically used for Performance Optimaization.
   *
   * Donot cause side effects here.
   *
   */
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  /**
   * Called right before the changes from virtual DOM
   * are to be reflected in the DOM.
   *
   * We can use this method to capture some info from DOM for
   * example we can read users scroll position and after the update
   * maintain the scroll position by performing some calculation.
   *
   * This method will either return null or a value.Returned value
   * will be passed as the third parameter to the next method.
   *
   * This method is classified as rarely used method by react official
   * documentation.
   *
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  /**
   * Called after the render is finished in the re-rendering
   * cycles.This means that all the components have properly
   * render itself after the update.
   *
   * This method is gaurenteed to be called once in the each re-render
   * cycle.So, we can do side effects here i.e. we can make AJAX calls.
   * But before making the call we need to compare previous props with
   * new props and then decide whether to make AJAX call or not.
   *
   *
   */
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }
  render() {
    console.log('LifecycleB render function ');
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
