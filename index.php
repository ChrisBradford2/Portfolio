<?php

    /*// récupère la variable langage si elle existe
    if (preg_match("#$HTTP_ACCEPT_LANGUAGE","fr"))

    // redirige vers la page
    header("location:https://www.nicolas-barbarisi.com/fr");

    // Ainsi de suite pour les autres langues
    elseif (preg_match("#$HTTP_ACCEPT_LANGUAGE#","en"))
    header("location:https://www.nicolas-barbarisi.com/en");

    // Sinon la varible n'existe pas et on redirige
    else
    header("location:https://www.nicolas-barbarisi.com/");*/

    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    if ($lang == "en")
        header("location:https://www.nicolas-barbarisi.com/en");
    elseif ($lang == "fr")
        header("location:https://www.nicolas-barbarisi.com/fr");
    elseif ($lang == "pt")
        header("location:https://www.nicolas-barbarisi.com/pt");
    else
        header("location:https://www.nicolas-barbarisi.com/fr");
?>