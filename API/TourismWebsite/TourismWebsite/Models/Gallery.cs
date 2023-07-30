using System;
using System.Collections.Generic;

namespace TourismWebsite.Models;

public partial class Gallery
{
    public int ImageId { get; set; }

    public string? Image { get; set; }

    public string? Location { get; set; }
}
