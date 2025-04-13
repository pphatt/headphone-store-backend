﻿using HeadphoneStore.Domain.Abstracts.Entities;

namespace HeadphoneStore.Domain.Entities.Content;

public class ProductMedia : Entity<Guid>, ICreatedByEntity<Guid>, IUpdatedByEntity<Guid?>
{
    public string ImageUrl { get; private set; }
    public Guid CreatedBy { get; set; }
    public Guid? UpdatedBy { get; set; }

    private ProductMedia() { } // For EF Core

    public ProductMedia(string imageUrl, Guid createdBy) : base(Guid.NewGuid())
    {
        ImageUrl = imageUrl ?? throw new ArgumentNullException(nameof(imageUrl));
        CreatedBy = createdBy;
        CreatedOnUtc = DateTime.UtcNow;
    }

    public void Update(string imageUrl, Guid updatedBy)
    {
        ImageUrl = imageUrl ?? throw new ArgumentNullException(nameof(imageUrl));
        UpdatedBy = updatedBy;
        ModifiedOnUtc = DateTime.UtcNow;
    }
}
