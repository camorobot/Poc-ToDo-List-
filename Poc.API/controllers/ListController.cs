using Microsoft.AspNetCore.Mvc;
using PocToDoList.services;
using PocToDoList.models;

namespace PocToDoList.controllers;

[Route("/api/list")]
[ApiController]
public class ListController : ControllerBase
{

    private readonly ListService _listService;

    public ListController(ListService listService) {
        _listService = listService;
    }

    [HttpGet]
    public List<string> Get()
    {
        return _listService.GetAllItems();
    }

    [HttpPost]
    public IActionResult Post([FromBody] ItemModel item)
    {
        if (string.IsNullOrEmpty(item.Item))
        {
            return BadRequest("Item mag niet leeg zijn");
        }
        
        _listService.AddItem(item.Item);

        return Ok(item);
    }

}