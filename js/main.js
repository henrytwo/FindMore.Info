function search(query)
{
    var formattedQuery = encodeURIComponent(query);
    window.location.href = "http://lmgtfy.com/?q=" + formattedQuery;
}
