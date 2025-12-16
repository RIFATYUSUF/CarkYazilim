using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class serviceNull2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Services_ServicesId",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_ServicesId",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "ServicesId",
                table: "Contacts");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ServicesId",
                table: "Contacts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_ServicesId",
                table: "Contacts",
                column: "ServicesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Services_ServicesId",
                table: "Contacts",
                column: "ServicesId",
                principalTable: "Services",
                principalColumn: "ServicesId");
        }
    }
}
