namespace PocToDoList.services;

public class ListService
{
    private static List<String> _list = new List<String>
        { "Honden eten geven", "Kat naar buiten doen", "Vaatwasser uitruimen" };

    public List<String> GetAllItems()
    {
        return _list;
    }

    public void AddItem(String item)
    {
        _list.Add(item);
    }
}