import {create} from 'react-test-renderer';
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component',()=>{
  test('status from props should be in the state',()=>{
      const component = create(<ProfileStatus status='it-kamasutra.com'/>)
      const instance = component.getInstance()
      expect(instance.state.status).toBe('it-kamasutra.com')
  })

  test("after creation 'span'  should be displayed with correct status",()=>{
    const component = create(<ProfileStatus status='it-kamasutra.com'/>)
    const instance = component.root
    let span = instance.findByType("span")
    expect(span).not.toBeNull()
  })

  test("after creation 'input' shouldn't be displayed ",()=>{
    const component = create(<ProfileStatus status='it-kamasutra.com'/>)
    const instance = component.root
    expect(()=>{
      let input = instance.findByType("input")
    }).toThrow()
  })

  test("after creation 'span'  should be  status",()=>{
    const component = create(<ProfileStatus status='it-kamasutra.com'/>)
    const instance = component.root
    let span = instance.findByType("span")
    expect(span.children[1]).toBe('it-kamasutra.com')
  })

  test("input should be displayed in editMode instead of span ",()=>{
    const component = create(<ProfileStatus status='it-kamasutra.com'/>)
    const instance = component.root
    let span = instance.findByType("span")
    span.props.onDoubleClick()
    let input = instance.findByType("input")
    expect(input.props.value).toBe('it-kamasutra.com')
  })

  test("callback should be called ",()=>{
    let mockCallback = jest.fn()
    const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={mockCallback}/>)
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })

})