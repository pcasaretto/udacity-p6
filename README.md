# Summary

A data visualization showing the correlation between alcohol concentration and
perceived wine quality.
The dataset is relative to red variants of the Portuguese "Vinho Verde" wine.
The visualization showcases one of the most interesting findings during the
exploratory data analysis of the dataset and also allows some exploration.

# Design

The basic idea is to use faceted boxplots for each quality ranking versus the
other variables.

![Sketch](/sketch.png?raw=true "Sketch")

After the first feedback it became clear that the lack of labels and ticks on the axes were pretty misleading.
In retrospect, that should have been pretty obvious. Even the sketch screenshot contains them.

# Feedback

I asked the following questions:

* What do you notice in the visualization?
* What questions do you have about the data?
* What relationships do you notice?
* What do you think is the main takeaway from this visualization?
* Is there something you don’t understand in the graphic?

## #1

* What do you notice in the visualization?
> I guess each box in the graphic is related to one single red variant of Vinho Verde. The circles in the graphic are related to the outliers.
* What questions do you have about the data?
> None.
* What relationships do you notice?
> Residual sugar is the most irrelevant variable to define an excellent wine, given the number of outliers and the same average mean. And of course, there is the correlation written above the graphic (alcohol vs quality). I always knew! haha
* What do you think is the main takeaway from this visualization?
> The separation of the quality of the wine in small variables, and importance of each of them in the definition of a good wine.
* Is there something you don’t understand in the graphic?
> Like I said in the first question, I GUESS the boxes are related to the red variants of Vinho Verde, but I can be wrong. It is hard to understand the graphic in the first place. I had to read the text above and visit the website to understand, and I don't even know if I'm right. In my opinion, it would be great to put some labels on it.


# Resources

https://bl.ocks.org/mbostock/4061502

Citation Request:
  This dataset is public available for research. The details are described in [Cortez et al., 2009].
  Please include this citation if you plan to use this database:

  P. Cortez, A. Cerdeira, F. Almeida, T. Matos and J. Reis.
  Modeling wine preferences by data mining from physicochemical properties.
  In Decision Support Systems, Elsevier, 47(4):547-553. ISSN: 0167-9236.

  Available at: @Elsevier http://dx.doi.org/10.1016/j.dss.2009.05.016
                Pre-press (pdf) http://www3.dsi.uminho.pt/pcortez/winequality09.pdf
                bib http://www3.dsi.uminho.pt/pcortez/dss09.bib
