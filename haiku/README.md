# Haiku

First, I looked online for haikus.  I started on [poetryfoundation](https://www.poetryfoundation.org/categories/haiku) because I knew the text would be easily copyable. 

Once I decided on a [haiku](https://www.poetryfoundation.org/poems/147906/suicide39s-note) to use, I opened Terminal and navigated to the desktop so I knew where the .aiff file I was creating was going to end up.
 
 `% cd desktop`  
 
I then checked to see I was navigating in the desktop by using the print written directory (pwd) command

I then began the process of reciting the poem and creating a file of it.  
I first used the say command to recite a piece of text (hi).      
`% say hi`

This made the computer recite "hi" to me.
 
Once I was comfortable with the say command, I introduced the `-o` command.  This command will create an object file, in our case, a .aiff file.

`% say hi -o hi.aiff`

This created a file named hi.aiff, in which the text-to-speech recites "hi".

Once I was comfortable using these two commands, I copied the previously selected haiku and pasted it into the Terminal.

`% say Suicide's Note
By Langston Hughes
The calm,
Cool face of the river
Asked me for a kiss. -o haiku.aiff`

This didn't work and only returned `quote` from the Terminal.

I assumed the issue was the lack of quotation marks and formatting, so I repasted the haiku, this time on a single line with the correct quotation marks.

` % say "Suicide's Note, by Langston Hughes.  The calm, Cool face of the river, Asked me for a kiss" -o haiku.aiff`

This returned the haiku.aiff file with the haiku recited.

I then moved haiku.aiff to the haiku folder in my ITP repository.

##Conclusion
I found that breaking down the two commands into small parts before bringing them together proved beneficial in the outcome, as well as my learning process.  I also learned of the importance of quotation marks while using the `say` command. 




   
