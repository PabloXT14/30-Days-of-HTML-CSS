import { Slider, SwitchContainer } from "./styles";

export function Switch() {
  return (
    <SwitchContainer>
      <input type='checkbox'/>
      <Slider sliders='slider1' className="slider-1">ON</Slider>
      <Slider sliders='slider2' className="slider-2">
        <div></div>
        <div></div>
      </Slider>
      <Slider sliders='slider3' className="slider-3"></Slider>
      <Slider sliders='slider4' className="slider-4">OFF</Slider>
    </SwitchContainer>
  );
}