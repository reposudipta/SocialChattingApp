using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    //Data Transfer Object
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}