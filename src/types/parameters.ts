export type Parameter =
  | 'mod1'
  | 'mod2'
  | 'mod3'
  | 'rotation'
  | 'kaleid'
  | 'pixelate'
  | 'scale'
  | 'colorama'
  | 'modulate'
  | 'modulateRotate'
  | 'modulateScale'
  | 'repeatXY' // can't be named 'repeat' as it collides with gsap :(
  | 'blend'
  | 'diff'
  | 'feedback'
  | 'selfModulate';
