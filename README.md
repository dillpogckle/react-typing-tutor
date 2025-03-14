# Project Requirements

1. Upon DOM load the page should display a phrase and a keyboard that responds to the keys pressed.
2. The correct key needed to type the phrase should be highlighted in some way.
3. The phrase should appear greyed out with an underline underneath the letter needing to be typed.
4. When the shift key is pressed the keyboard should display the uppercase letters and symbols.
5. When the correct key is pressed the letter should turn black (fill in) and the underline should move to the next
letter. The next letter should also be highlighted on the keyboard.
6. When the incorrect key is pressed the keyboard should show the key press but the underline should not move and the 
letter should not darken. 
7. When the entire phrase is complete a new phrase should be generated and the process starts over

### More Specific Details
1. Keys all have shadow, but when pressed key moves and shadow disappears creating a 3d effect.
2. Highlighted key is a different color of shadow.
3. Key highlight and phrase underline change on key press down, not key up.
4. Shift effects stay in effect until shift key up.
5. No caps lock functionality.
   - This may just be a bug in the example. Input when caps lock is turned on counts as capitalized but the keyboard
   does not reflect this. May want to see if there is a workaround for this.