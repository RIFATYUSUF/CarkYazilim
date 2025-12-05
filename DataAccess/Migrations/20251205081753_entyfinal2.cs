using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class entyfinal2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Subject",
                table: "Contacts",
                newName: "Service");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Contacts",
                newName: "NameSurname");

            migrationBuilder.AddColumn<DateTime>(
                name: "SendDate",
                table: "QuotationForms",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SendDate",
                table: "Contacts",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "ServicesId",
                table: "Contacts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_ServicesId",
                table: "Contacts",
                column: "ServicesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Services_ServicesId",
                table: "Contacts",
                column: "ServicesId",
                principalTable: "Services",
                principalColumn: "ServicesId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Services_ServicesId",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_ServicesId",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "SendDate",
                table: "QuotationForms");

            migrationBuilder.DropColumn(
                name: "SendDate",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "ServicesId",
                table: "Contacts");

            migrationBuilder.RenameColumn(
                name: "Service",
                table: "Contacts",
                newName: "Subject");

            migrationBuilder.RenameColumn(
                name: "NameSurname",
                table: "Contacts",
                newName: "Name");
        }
    }
}
