$(document).ready(function () {
  const updateCount = () => {
    $("#taskCount").text($("#taskList li").length);
  };

  $("#addTaskBtn").on("click", function () {
    let taskText = $("#taskInput").val().trim();

    if (taskText !== "") {
      let taskItem = $(`<li>
                <span class="taskText">${taskText}</span>
                <button class="completeBtn">☑️</button>
                <button class="deleteBtn">❌</button>
                </li>`);
      $("#taskList").append(taskItem.hide().fadeIn());
      $("#task-input").val("");
      updateCount();
    }
  });

  $("#toggleTasks").on("click", function () {
    $("#taskList").toggle();
  });

  $("#taskList").on("click", ".completeBtn", function () {
    $(this).siblings(".taskText").toggleClass("completed");
  });

  $("#taskList").on("click", ".deleteBtn", function () {
    $(this)
      .parent()
      .fadeOut(function () {
        $(this).remove();
        updateCount();
      });
  });

  $("#taskList").sortable();
});
